var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as fontkit from 'fontkit';
import { isTextSchema } from './type';
import { Buffer } from 'buffer';
import { DEFAULT_FONT_VALUE, DEFAULT_FONT_NAME, DEFAULT_FONT_SIZE, DEFAULT_CHARACTER_SPACING, DEFAULT_LINE_HEIGHT, FONT_SIZE_ADJUSTMENT, PT_TO_PX_RATIO, DEFAULT_DYNAMIC_FIT, DYNAMIC_FIT_HORIZONTAL, DYNAMIC_FIT_VERTICAL, } from './constants';
import { mm2pt, pt2mm } from './helper';
import { b64toUint8Array } from ".";
export const getFallbackFontName = (font) => {
    const initial = '';
    const fallbackFontName = Object.entries(font).reduce((acc, cur) => {
        const [fontName, fontValue] = cur;
        return !acc && fontValue.fallback ? fontName : acc;
    }, initial);
    if (fallbackFontName === initial) {
        throw Error(`fallback flag is not found in font. true fallback flag must be only one.`);
    }
    return fallbackFontName;
};
const getFallbackFont = (font) => {
    const fallbackFontName = getFallbackFontName(font);
    return font[fallbackFontName];
};
export const getDefaultFont = () => ({
    [DEFAULT_FONT_NAME]: { data: b64toUint8Array(DEFAULT_FONT_VALUE), fallback: true },
});
const uniq = (array) => Array.from(new Set(array));
const getFontNamesInSchemas = (schemas) => uniq(schemas
    .map((s) => Object.values(s).map((v) => (isTextSchema(v) ? v.fontName : '')))
    .reduce((acc, cur) => acc.concat(cur), [])
    .filter(Boolean));
export const checkFont = (arg) => {
    const { font, template: { schemas }, } = arg;
    const fontValues = Object.values(font);
    const fallbackFontNum = fontValues.reduce((acc, cur) => (cur.fallback ? acc + 1 : acc), 0);
    if (fallbackFontNum === 0) {
        throw Error(`fallback flag is not found in font. true fallback flag must be only one.`);
    }
    if (fallbackFontNum > 1) {
        throw Error(`${fallbackFontNum} fallback flags found in font. true fallback flag must be only one.`);
    }
    const fontNamesInSchemas = getFontNamesInSchemas(schemas);
    const fontNames = Object.keys(font);
    if (fontNamesInSchemas.some((f) => !fontNames.includes(f))) {
        throw Error(`${fontNamesInSchemas
            .filter((f) => !fontNames.includes(f))
            .join()} of template.schemas is not found in font.`);
    }
};
export const getFontAlignmentValue = (fontKitFont, fontSize) => {
    const { ascent, descent, unitsPerEm } = fontKitFont;
    const fontSizeInPx = fontSize * PT_TO_PX_RATIO;
    // Convert ascent and descent to px values
    const ascentInPixels = (ascent / unitsPerEm) * fontSizeInPx;
    const descentInPixels = (descent / unitsPerEm) * fontSizeInPx;
    // Calculate the single line height in px
    const singleLineHeight = ((ascentInPixels + Math.abs(descentInPixels)) / fontSizeInPx);
    // Calculate the top margin/padding in px
    return ((singleLineHeight * fontSizeInPx) - fontSizeInPx) / 2;
};
export const heightOfFontAtSize = (fontKitFont, fontSize) => {
    const { ascent, descent, bbox, unitsPerEm } = fontKitFont;
    const scale = 1000 / unitsPerEm;
    const yTop = (ascent || bbox.maxY) * scale;
    const yBottom = (descent || bbox.minY) * scale;
    let height = yTop - yBottom;
    height -= Math.abs(descent * scale) || 0;
    return (height / 1000) * fontSize;
};
const calculateCharacterSpacing = (textContent, textCharacterSpacing) => {
    return (textContent.length - 1) * textCharacterSpacing;
};
export const widthOfTextAtSize = (text, fontKitFont, fontSize, characterSpacing) => {
    const { glyphs } = fontKitFont.layout(text);
    const scale = 1000 / fontKitFont.unitsPerEm;
    const standardWidth = glyphs.reduce((totalWidth, glyph) => totalWidth + glyph.advanceWidth * scale, 0) *
        (fontSize / 1000);
    return standardWidth + calculateCharacterSpacing(text, characterSpacing);
};
const fontKitFontCache = {};
export const getFontKitFont = (textSchema, font) => __awaiter(void 0, void 0, void 0, function* () {
    const fontName = textSchema.fontName || getFallbackFontName(font);
    if (fontKitFontCache[fontName]) {
        return fontKitFontCache[fontName];
    }
    const currentFont = font[fontName] || getFallbackFont(font) || getDefaultFont()[DEFAULT_FONT_NAME];
    let fontData = currentFont.data;
    if (typeof fontData === 'string') {
        fontData = fontData.startsWith('http') ? yield fetch(fontData).then((res) => res.arrayBuffer()) : b64toUint8Array(fontData);
    }
    const fontKitFont = fontkit.create(fontData instanceof Buffer ? fontData : Buffer.from(fontData));
    fontKitFontCache[fontName] = fontKitFont;
    return fontKitFont;
});
const isTextExceedingBoxWidth = (text, calcValues) => {
    const { font, fontSize, characterSpacing, boxWidthInPt } = calcValues;
    const textWidth = widthOfTextAtSize(text, font, fontSize, characterSpacing);
    return textWidth > boxWidthInPt;
};
/**
 * Incrementally checks the current line for its real length
 * and returns the position where it exceeds the box width.
 * Returns `null` to indicate if textLine is shorter than the available box.
 */
const getOverPosition = (textLine, calcValues) => {
    for (let i = 0; i <= textLine.length; i++) {
        if (isTextExceedingBoxWidth(textLine.slice(0, i + 1), calcValues)) {
            return i;
        }
    }
    return null;
};
/**
 * Gets the position of the split. Splits the exceeding line at
 * the last whitespace prior to it exceeding the bounding box width.
 */
const getSplitPosition = (textLine, calcValues) => {
    const overPos = getOverPosition(textLine, calcValues);
    if (overPos === null)
        return textLine.length; // input line is shorter than the available space
    let overPosTmp = overPos;
    while (textLine[overPosTmp] !== ' ' && overPosTmp >= 0) {
        overPosTmp--;
    }
    // For very long lines with no whitespace use the original overPos
    return overPosTmp > 0 ? overPosTmp : overPos;
};
/**
 * Recursively splits the line at getSplitPosition.
 * If there is some leftover, split the rest again in the same manner.
 */
export const getSplittedLines = (textLine, calcValues) => {
    const splitPos = getSplitPosition(textLine, calcValues);
    const splittedLine = textLine.substring(0, splitPos);
    const rest = textLine.substring(splitPos).trimStart();
    if (rest === textLine) {
        // if we went so small that we want to split on the first char
        // then end recursion to avoid infinite loop
        return [textLine];
    }
    if (rest.length === 0) {
        // end recursion if there is no leftover
        return [splittedLine];
    }
    return [splittedLine, ...getSplittedLines(rest, calcValues)];
};
/**
 * If using dynamic font size, iteratively increment or decrement the
 * font size to fit the containing box.
 * Calculating space usage involves splitting lines where they exceed
 * the box width based on the proposed size.
 */
export const calculateDynamicFontSize = ({ textSchema, font, input, startingFontSize, }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { fontSize: schemaFontSize, dynamicFontSize: dynamicFontSizeSetting, characterSpacing: schemaCharacterSpacing, width: boxWidth, height: boxHeight, lineHeight = DEFAULT_LINE_HEIGHT, } = textSchema;
    const fontSize = startingFontSize || schemaFontSize || DEFAULT_FONT_SIZE;
    if (!dynamicFontSizeSetting)
        return fontSize;
    if (dynamicFontSizeSetting.max < dynamicFontSizeSetting.min)
        return fontSize;
    const characterSpacing = schemaCharacterSpacing !== null && schemaCharacterSpacing !== void 0 ? schemaCharacterSpacing : DEFAULT_CHARACTER_SPACING;
    const fontKitFont = yield getFontKitFont(textSchema, font);
    const textContentRows = input.split('\n');
    let dynamicFontSize = fontSize;
    if (dynamicFontSize < dynamicFontSizeSetting.min) {
        dynamicFontSize = dynamicFontSizeSetting.min;
    }
    else if (dynamicFontSize > dynamicFontSizeSetting.max) {
        dynamicFontSize = dynamicFontSizeSetting.max;
    }
    const dynamicFontFit = (_a = dynamicFontSizeSetting.fit) !== null && _a !== void 0 ? _a : DEFAULT_DYNAMIC_FIT;
    const calculateConstraints = (size) => {
        let totalWidthInMm = 0;
        let totalHeightInMm = 0;
        const boxWidthInPt = mm2pt(boxWidth);
        const textHeight = heightOfFontAtSize(fontKitFont, size);
        const textHeightInMm = pt2mm(textHeight * lineHeight);
        textContentRows.forEach((paragraph) => {
            const lines = getSplittedLines(paragraph, {
                font: fontKitFont,
                fontSize: size,
                characterSpacing,
                boxWidthInPt,
            });
            lines.forEach((line) => {
                if (dynamicFontFit === DYNAMIC_FIT_VERTICAL) {
                    // For vertical fit we want to consider the width of text lines where we detect a split
                    const textWidth = widthOfTextAtSize(line, fontKitFont, size, characterSpacing);
                    const textWidthInMm = pt2mm(textWidth);
                    totalWidthInMm = Math.max(totalWidthInMm, textWidthInMm);
                }
                totalHeightInMm += textHeightInMm;
            });
            if (dynamicFontFit === DYNAMIC_FIT_HORIZONTAL) {
                // For horizontal fit we want to consider the line's width 'unsplit'
                const textWidth = widthOfTextAtSize(paragraph, fontKitFont, size, characterSpacing);
                const textWidthInMm = pt2mm(textWidth);
                totalWidthInMm = Math.max(totalWidthInMm, textWidthInMm);
            }
        });
        return { totalWidthInMm, totalHeightInMm };
    };
    const shouldFontGrowToFit = (totalWidthInMm, totalHeightInMm) => {
        if (dynamicFontSize >= dynamicFontSizeSetting.max) {
            return false;
        }
        if (dynamicFontFit === DYNAMIC_FIT_HORIZONTAL) {
            return totalWidthInMm < boxWidth;
        }
        return totalHeightInMm < boxHeight;
    };
    const shouldFontShrinkToFit = (totalWidthInMm, totalHeightInMm) => {
        if (dynamicFontSize <= dynamicFontSizeSetting.min || dynamicFontSize <= 0) {
            return false;
        }
        return totalWidthInMm > boxWidth || totalHeightInMm > boxHeight;
    };
    let { totalWidthInMm, totalHeightInMm } = calculateConstraints(dynamicFontSize);
    // Attempt to increase the font size up to desired fit
    while (shouldFontGrowToFit(totalWidthInMm, totalHeightInMm)) {
        dynamicFontSize += FONT_SIZE_ADJUSTMENT;
        const { totalWidthInMm: newWidth, totalHeightInMm: newHeight } = calculateConstraints(dynamicFontSize);
        if (newHeight < boxHeight) {
            totalWidthInMm = newWidth;
            totalHeightInMm = newHeight;
        }
        else {
            dynamicFontSize -= FONT_SIZE_ADJUSTMENT;
            break;
        }
    }
    // Attempt to decrease the font size down to desired fit
    while (shouldFontShrinkToFit(totalWidthInMm, totalHeightInMm)) {
        dynamicFontSize -= FONT_SIZE_ADJUSTMENT;
        ({ totalWidthInMm, totalHeightInMm } = calculateConstraints(dynamicFontSize));
    }
    return dynamicFontSize;
});
//# sourceMappingURL=font.js.map
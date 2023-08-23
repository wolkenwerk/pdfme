"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDynamicFontSize = exports.getSplittedLines = exports.getFontKitFont = exports.widthOfTextAtSize = exports.heightOfFontAtSize = exports.getFontAlignmentValue = exports.checkFont = exports.getDefaultFont = exports.getFallbackFontName = void 0;
const fontkit = __importStar(require("fontkit"));
const type_1 = require("./type");
const buffer_1 = require("buffer");
const constants_1 = require("./constants");
const helper_1 = require("./helper");
const _1 = require(".");
const getFallbackFontName = (font) => {
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
exports.getFallbackFontName = getFallbackFontName;
const getFallbackFont = (font) => {
    const fallbackFontName = (0, exports.getFallbackFontName)(font);
    return font[fallbackFontName];
};
const getDefaultFont = () => ({
    [constants_1.DEFAULT_FONT_NAME]: { data: (0, _1.b64toUint8Array)(constants_1.DEFAULT_FONT_VALUE), fallback: true },
});
exports.getDefaultFont = getDefaultFont;
const uniq = (array) => Array.from(new Set(array));
const getFontNamesInSchemas = (schemas) => uniq(schemas
    .map((s) => Object.values(s).map((v) => ((0, type_1.isTextSchema)(v) ? v.fontName : '')))
    .reduce((acc, cur) => acc.concat(cur), [])
    .filter(Boolean));
const checkFont = (arg) => {
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
exports.checkFont = checkFont;
const getFontAlignmentValue = (fontKitFont, fontSize) => {
    const { ascent, descent, unitsPerEm } = fontKitFont;
    const fontSizeInPx = fontSize * constants_1.PT_TO_PX_RATIO;
    // Convert ascent and descent to px values
    const ascentInPixels = (ascent / unitsPerEm) * fontSizeInPx;
    const descentInPixels = (descent / unitsPerEm) * fontSizeInPx;
    // Calculate the single line height in px
    const singleLineHeight = ((ascentInPixels + Math.abs(descentInPixels)) / fontSizeInPx);
    // Calculate the top margin/padding in px
    return ((singleLineHeight * fontSizeInPx) - fontSizeInPx) / 2;
};
exports.getFontAlignmentValue = getFontAlignmentValue;
const heightOfFontAtSize = (fontKitFont, fontSize) => {
    const { ascent, descent, bbox, unitsPerEm } = fontKitFont;
    const scale = 1000 / unitsPerEm;
    const yTop = (ascent || bbox.maxY) * scale;
    const yBottom = (descent || bbox.minY) * scale;
    let height = yTop - yBottom;
    height -= Math.abs(descent * scale) || 0;
    return (height / 1000) * fontSize;
};
exports.heightOfFontAtSize = heightOfFontAtSize;
const calculateCharacterSpacing = (textContent, textCharacterSpacing) => {
    return (textContent.length - 1) * textCharacterSpacing;
};
const widthOfTextAtSize = (text, fontKitFont, fontSize, characterSpacing) => {
    const { glyphs } = fontKitFont.layout(text);
    const scale = 1000 / fontKitFont.unitsPerEm;
    const standardWidth = glyphs.reduce((totalWidth, glyph) => totalWidth + glyph.advanceWidth * scale, 0) *
        (fontSize / 1000);
    return standardWidth + calculateCharacterSpacing(text, characterSpacing);
};
exports.widthOfTextAtSize = widthOfTextAtSize;
const fontKitFontCache = {};
const getFontKitFont = (textSchema, font) => __awaiter(void 0, void 0, void 0, function* () {
    const fontName = textSchema.fontName || (0, exports.getFallbackFontName)(font);
    if (fontKitFontCache[fontName]) {
        return fontKitFontCache[fontName];
    }
    const currentFont = font[fontName] || getFallbackFont(font) || (0, exports.getDefaultFont)()[constants_1.DEFAULT_FONT_NAME];
    let fontData = currentFont.data;
    if (typeof fontData === 'string') {
        fontData = fontData.startsWith('http') ? yield fetch(fontData).then((res) => res.arrayBuffer()) : (0, _1.b64toUint8Array)(fontData);
    }
    const fontKitFont = fontkit.create(fontData instanceof buffer_1.Buffer ? fontData : buffer_1.Buffer.from(fontData));
    fontKitFontCache[fontName] = fontKitFont;
    return fontKitFont;
});
exports.getFontKitFont = getFontKitFont;
const isTextExceedingBoxWidth = (text, calcValues) => {
    const { font, fontSize, characterSpacing, boxWidthInPt } = calcValues;
    const textWidth = (0, exports.widthOfTextAtSize)(text, font, fontSize, characterSpacing);
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
const getSplittedLines = (textLine, calcValues) => {
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
    return [splittedLine, ...(0, exports.getSplittedLines)(rest, calcValues)];
};
exports.getSplittedLines = getSplittedLines;
/**
 * If using dynamic font size, iteratively increment or decrement the
 * font size to fit the containing box.
 * Calculating space usage involves splitting lines where they exceed
 * the box width based on the proposed size.
 */
const calculateDynamicFontSize = ({ textSchema, font, input, startingFontSize, }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { fontSize: schemaFontSize, dynamicFontSize: dynamicFontSizeSetting, characterSpacing: schemaCharacterSpacing, width: boxWidth, height: boxHeight, lineHeight = constants_1.DEFAULT_LINE_HEIGHT, } = textSchema;
    const fontSize = startingFontSize || schemaFontSize || constants_1.DEFAULT_FONT_SIZE;
    if (!dynamicFontSizeSetting)
        return fontSize;
    if (dynamicFontSizeSetting.max < dynamicFontSizeSetting.min)
        return fontSize;
    const characterSpacing = schemaCharacterSpacing !== null && schemaCharacterSpacing !== void 0 ? schemaCharacterSpacing : constants_1.DEFAULT_CHARACTER_SPACING;
    const fontKitFont = yield (0, exports.getFontKitFont)(textSchema, font);
    const textContentRows = input.split('\n');
    let dynamicFontSize = fontSize;
    if (dynamicFontSize < dynamicFontSizeSetting.min) {
        dynamicFontSize = dynamicFontSizeSetting.min;
    }
    else if (dynamicFontSize > dynamicFontSizeSetting.max) {
        dynamicFontSize = dynamicFontSizeSetting.max;
    }
    const dynamicFontFit = (_a = dynamicFontSizeSetting.fit) !== null && _a !== void 0 ? _a : constants_1.DEFAULT_DYNAMIC_FIT;
    const calculateConstraints = (size) => {
        let totalWidthInMm = 0;
        let totalHeightInMm = 0;
        const boxWidthInPt = (0, helper_1.mm2pt)(boxWidth);
        const textHeight = (0, exports.heightOfFontAtSize)(fontKitFont, size);
        const textHeightInMm = (0, helper_1.pt2mm)(textHeight * lineHeight);
        textContentRows.forEach((paragraph) => {
            const lines = (0, exports.getSplittedLines)(paragraph, {
                font: fontKitFont,
                fontSize: size,
                characterSpacing,
                boxWidthInPt,
            });
            lines.forEach((line) => {
                if (dynamicFontFit === constants_1.DYNAMIC_FIT_VERTICAL) {
                    // For vertical fit we want to consider the width of text lines where we detect a split
                    const textWidth = (0, exports.widthOfTextAtSize)(line, fontKitFont, size, characterSpacing);
                    const textWidthInMm = (0, helper_1.pt2mm)(textWidth);
                    totalWidthInMm = Math.max(totalWidthInMm, textWidthInMm);
                }
                totalHeightInMm += textHeightInMm;
            });
            if (dynamicFontFit === constants_1.DYNAMIC_FIT_HORIZONTAL) {
                // For horizontal fit we want to consider the line's width 'unsplit'
                const textWidth = (0, exports.widthOfTextAtSize)(paragraph, fontKitFont, size, characterSpacing);
                const textWidthInMm = (0, helper_1.pt2mm)(textWidth);
                totalWidthInMm = Math.max(totalWidthInMm, textWidthInMm);
            }
        });
        return { totalWidthInMm, totalHeightInMm };
    };
    const shouldFontGrowToFit = (totalWidthInMm, totalHeightInMm) => {
        if (dynamicFontSize >= dynamicFontSizeSetting.max) {
            return false;
        }
        if (dynamicFontFit === constants_1.DYNAMIC_FIT_HORIZONTAL) {
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
        dynamicFontSize += constants_1.FONT_SIZE_ADJUSTMENT;
        const { totalWidthInMm: newWidth, totalHeightInMm: newHeight } = calculateConstraints(dynamicFontSize);
        if (newHeight < boxHeight) {
            totalWidthInMm = newWidth;
            totalHeightInMm = newHeight;
        }
        else {
            dynamicFontSize -= constants_1.FONT_SIZE_ADJUSTMENT;
            break;
        }
    }
    // Attempt to decrease the font size down to desired fit
    while (shouldFontShrinkToFit(totalWidthInMm, totalHeightInMm)) {
        dynamicFontSize -= constants_1.FONT_SIZE_ADJUSTMENT;
        ({ totalWidthInMm, totalHeightInMm } = calculateConstraints(dynamicFontSize));
    }
    return dynamicFontSize;
});
exports.calculateDynamicFontSize = calculateDynamicFontSize;
//# sourceMappingURL=font.js.map
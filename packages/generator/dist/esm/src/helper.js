var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PDFDocument, rgb, degrees, setCharacterSpacing, } from '@pdfme/pdf-lib';
import bwipjs from 'bwip-js';
import { getB64BasePdf, b64toUint8Array, validateBarcodeInput, isTextSchema, isImageSchema, isBarcodeSchema, DEFAULT_FONT_SIZE, DEFAULT_ALIGNMENT, DEFAULT_LINE_HEIGHT, DEFAULT_CHARACTER_SPACING, DEFAULT_FONT_COLOR, calculateDynamicFontSize, heightOfFontAtSize, getFontKitFont, getSplittedLines, mm2pt, widthOfTextAtSize, } from '@pdfme/common';
const barCodeType2Bcid = (type) => (type === 'nw7' ? 'rationalizedCodabar' : type);
export const createBarCode = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, input, width, height, backgroundColor } = arg;
    const bcid = barCodeType2Bcid(type);
    const includetext = true;
    const scale = 5;
    const bwipjsArg = { bcid, text: input, width, height, scale, includetext };
    if (backgroundColor) {
        bwipjsArg.backgroundcolor = backgroundColor;
    }
    let res;
    if (typeof window !== 'undefined') {
        const canvas = document.createElement('canvas');
        bwipjs.toCanvas(canvas, bwipjsArg);
        const dataUrl = canvas.toDataURL('image/png');
        res = b64toUint8Array(dataUrl).buffer;
    }
    else {
        res = yield bwipjs.toBuffer(bwipjsArg);
    }
    return res;
});
export const embedAndGetFontObj = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const { pdfDoc, font } = arg;
    const fontValues = yield Promise.all(Object.values(font).map((v) => __awaiter(void 0, void 0, void 0, function* () {
        let fontData = v.data;
        if (typeof fontData === 'string' && fontData.startsWith('http')) {
            fontData = yield fetch(fontData).then((res) => res.arrayBuffer());
        }
        return pdfDoc.embedFont(fontData, {
            subset: typeof v.subset === 'undefined' ? true : v.subset,
        });
    })));
    return Object.keys(font).reduce((acc, cur, i) => Object.assign(acc, { [cur]: fontValues[i] }), {});
});
export const getEmbeddedPagesAndEmbedPdfBoxes = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const { pdfDoc, basePdf } = arg;
    let embeddedPages = [];
    let embedPdfBoxes = [];
    const willLoadPdf = typeof basePdf === 'string' ? yield getB64BasePdf(basePdf) : basePdf;
    const embedPdf = yield PDFDocument.load(willLoadPdf);
    const embedPdfPages = embedPdf.getPages();
    embedPdfBoxes = embedPdfPages.map((p) => ({
        mediaBox: p.getMediaBox(),
        bleedBox: p.getBleedBox(),
        trimBox: p.getTrimBox(),
    }));
    const boundingBoxes = embedPdfPages.map((p) => {
        const { x, y, width, height } = p.getMediaBox();
        return { left: x, bottom: y, right: width, top: height + y };
    });
    const transformationMatrices = embedPdfPages.map(() => [1, 0, 0, 1, 0, 0]);
    embeddedPages = yield pdfDoc.embedPages(embedPdfPages, boundingBoxes, transformationMatrices);
    return { embeddedPages, embedPdfBoxes };
});
const convertSchemaDimensionsToPt = (schema) => {
    const width = mm2pt(schema.width);
    const height = mm2pt(schema.height);
    const rotate = degrees(schema.rotate ? schema.rotate : 0);
    return { width, height, rotate };
};
const hex2rgb = (hex) => {
    if (hex.slice(0, 1) === '#')
        hex = hex.slice(1);
    if (hex.length === 3)
        hex =
            hex.slice(0, 1) +
                hex.slice(0, 1) +
                hex.slice(1, 2) +
                hex.slice(1, 2) +
                hex.slice(2, 3) +
                hex.slice(2, 3);
    return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map((str) => parseInt(str, 16));
};
const hex2RgbColor = (hexString) => {
    if (hexString) {
        const [r, g, b] = hex2rgb(hexString);
        return rgb(r / 255, g / 255, b / 255);
    }
    // eslint-disable-next-line no-undefined
    return undefined;
};
const getFontProp = ({ input, font, schema }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const size = schema.dynamicFontSize ? yield calculateDynamicFontSize({ textSchema: schema, font, input }) : (_a = schema.fontSize) !== null && _a !== void 0 ? _a : DEFAULT_FONT_SIZE;
    const color = hex2RgbColor((_b = schema.fontColor) !== null && _b !== void 0 ? _b : DEFAULT_FONT_COLOR);
    const alignment = (_c = schema.alignment) !== null && _c !== void 0 ? _c : DEFAULT_ALIGNMENT;
    const lineHeight = (_d = schema.lineHeight) !== null && _d !== void 0 ? _d : DEFAULT_LINE_HEIGHT;
    const characterSpacing = (_e = schema.characterSpacing) !== null && _e !== void 0 ? _e : DEFAULT_CHARACTER_SPACING;
    return { size, color, alignment, lineHeight, characterSpacing };
});
const calcX = (x, alignment, boxWidth, textWidth) => {
    let addition = 0;
    if (alignment === 'center') {
        addition = (boxWidth - textWidth) / 2;
    }
    else if (alignment === 'right') {
        addition = boxWidth - textWidth;
    }
    return mm2pt(x) + addition;
};
const calcY = (y, height, itemHeight) => height - mm2pt(y) - itemHeight;
const drawBackgroundColor = (arg) => {
    const { templateSchema, page, pageHeight } = arg;
    if (!templateSchema.backgroundColor)
        return;
    const { width, height } = convertSchemaDimensionsToPt(templateSchema);
    const color = hex2RgbColor(templateSchema.backgroundColor);
    page.drawRectangle({
        x: calcX(templateSchema.position.x, 'left', width, width),
        y: calcY(templateSchema.position.y, pageHeight, height),
        width,
        height,
        color,
    });
};
const drawInputByTextSchema = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const { input, templateSchema, page, fontSetting } = arg;
    const { font, pdfFontObj, fallbackFontName } = fontSetting;
    const pdfFontValue = pdfFontObj[templateSchema.fontName ? templateSchema.fontName : fallbackFontName];
    const fontKitFont = yield getFontKitFont(templateSchema, font);
    const pageHeight = page.getHeight();
    drawBackgroundColor({ templateSchema, page, pageHeight });
    const { width, height, rotate } = convertSchemaDimensionsToPt(templateSchema);
    const { size, color, alignment, lineHeight, characterSpacing } = yield getFontProp({
        input,
        font,
        schema: templateSchema,
    });
    page.pushOperators(setCharacterSpacing(characterSpacing));
    let beforeLineOver = 0;
    const fontWidthCalcValues = {
        font: fontKitFont,
        fontSize: size,
        characterSpacing,
        boxWidthInPt: width,
    };
    input.split(/\r|\n|\r\n/g).forEach((inputLine, inputLineIndex) => {
        const splitLines = getSplittedLines(inputLine, fontWidthCalcValues);
        const drawLine = (line, lineIndex) => {
            const textWidth = widthOfTextAtSize(line, fontKitFont, size, characterSpacing);
            const textHeight = heightOfFontAtSize(fontKitFont, size);
            page.drawText(line, {
                x: calcX(templateSchema.position.x, alignment, width, textWidth),
                y: calcY(templateSchema.position.y, pageHeight, height) +
                    height -
                    textHeight -
                    lineHeight * size * (inputLineIndex + lineIndex + beforeLineOver) -
                    (lineHeight === 0 ? 0 : ((lineHeight - 1) * size) / 2),
                rotate,
                size,
                color,
                lineHeight: lineHeight * size,
                maxWidth: width,
                font: pdfFontValue,
                wordBreaks: [''],
            });
            if (splitLines.length === lineIndex + 1)
                beforeLineOver += lineIndex;
        };
        splitLines.forEach(drawLine);
    });
});
const getCacheKey = (templateSchema, input) => `${templateSchema.type}${input}`;
const drawInputByImageSchema = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const { input, templateSchema, pdfDoc, page, inputImageCache } = arg;
    const { width, height, rotate } = convertSchemaDimensionsToPt(templateSchema);
    const opt = {
        x: calcX(templateSchema.position.x, 'left', width, width),
        y: calcY(templateSchema.position.y, page.getHeight(), height),
        rotate,
        width,
        height,
    };
    const inputImageCacheKey = getCacheKey(templateSchema, input);
    let image = inputImageCache[inputImageCacheKey];
    if (!image) {
        const isPng = input.startsWith('data:image/png;');
        image = yield (isPng ? pdfDoc.embedPng(input) : pdfDoc.embedJpg(input));
    }
    inputImageCache[inputImageCacheKey] = image;
    page.drawImage(image, opt);
});
const drawInputByBarcodeSchema = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const { input, templateSchema, pdfDoc, page, inputImageCache } = arg;
    if (!validateBarcodeInput(templateSchema.type, input))
        return;
    const { width, height, rotate } = convertSchemaDimensionsToPt(templateSchema);
    const opt = {
        x: calcX(templateSchema.position.x, 'left', width, width),
        y: calcY(templateSchema.position.y, page.getHeight(), height),
        rotate,
        width,
        height,
    };
    const inputBarcodeCacheKey = getCacheKey(templateSchema, input);
    let image = inputImageCache[inputBarcodeCacheKey];
    if (!image) {
        const imageBuf = yield createBarCode(Object.assign(templateSchema, { type: templateSchema.type, input }));
        image = yield pdfDoc.embedPng(imageBuf);
    }
    inputImageCache[inputBarcodeCacheKey] = image;
    page.drawImage(image, opt);
});
export const drawInputByTemplateSchema = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    if (!arg.input || !arg.templateSchema)
        return;
    if (isTextSchema(arg.templateSchema)) {
        const templateSchema = arg.templateSchema;
        yield drawInputByTextSchema(Object.assign(Object.assign({}, arg), { templateSchema }));
    }
    else if (isImageSchema(arg.templateSchema)) {
        const templateSchema = arg.templateSchema;
        yield drawInputByImageSchema(Object.assign(Object.assign({}, arg), { templateSchema }));
    }
    else if (isBarcodeSchema(arg.templateSchema)) {
        const templateSchema = arg.templateSchema;
        yield drawInputByBarcodeSchema(Object.assign(Object.assign({}, arg), { templateSchema }));
    }
});
export const drawEmbeddedPage = (arg) => {
    const { page, embeddedPage, embedPdfBox } = arg;
    page.drawPage(embeddedPage);
    const { mediaBox: mb, bleedBox: bb, trimBox: tb } = embedPdfBox;
    page.setMediaBox(mb.x, mb.y, mb.width, mb.height);
    page.setBleedBox(bb.x, bb.y, bb.width, bb.height);
    page.setTrimBox(tb.x, tb.y, tb.width, tb.height);
};
//# sourceMappingURL=helper.js.map
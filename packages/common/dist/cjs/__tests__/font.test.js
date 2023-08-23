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
const fs_1 = require("fs");
const path = __importStar(require("path"));
const font_1 = require("../src/font");
const src_1 = require("../src");
const sansData = (0, fs_1.readFileSync)(path.join(__dirname, `/assets/fonts/SauceHanSansJP.ttf`));
const serifData = (0, fs_1.readFileSync)(path.join(__dirname, `/assets/fonts/SauceHanSerifJP.ttf`));
const getSampleFont = () => ({
    SauceHanSansJP: { fallback: true, data: sansData },
    SauceHanSerifJP: { data: serifData },
});
const getTemplate = () => ({
    basePdf: src_1.BLANK_PDF,
    schemas: [
        {
            a: {
                type: 'text',
                fontName: 'SauceHanSansJP',
                position: { x: 0, y: 0 },
                width: 100,
                height: 100,
            },
            b: {
                type: 'text',
                position: { x: 0, y: 0 },
                width: 100,
                height: 100,
            },
        },
    ],
});
const getTextSchema = () => {
    const textSchema = {
        position: { x: 0, y: 0 }, type: 'text', fontSize: 14, characterSpacing: 1, width: 50, height: 20
    };
    return textSchema;
};
describe('checkFont test', () => {
    test('success test: no fontName in Schemas', () => {
        const _getTemplate = () => ({
            basePdf: src_1.BLANK_PDF,
            schemas: [
                {
                    a: {
                        type: 'text',
                        position: { x: 0, y: 0 },
                        width: 100,
                        height: 100,
                    },
                    b: {
                        type: 'text',
                        position: { x: 0, y: 0 },
                        width: 100,
                        height: 100,
                    },
                },
            ],
        });
        try {
            (0, font_1.checkFont)({ template: _getTemplate(), font: getSampleFont() });
            expect.anything();
        }
        catch (e) {
            fail();
        }
    });
    test('success test: fontName in Schemas(fallback font)', () => {
        try {
            (0, font_1.checkFont)({ template: getTemplate(), font: getSampleFont() });
            expect.anything();
        }
        catch (e) {
            fail();
        }
    });
    test('success test: fontName in Schemas(not fallback font)', () => {
        const getFont = () => ({
            SauceHanSansJP: { data: sansData },
            SauceHanSerifJP: { fallback: true, data: serifData },
        });
        try {
            (0, font_1.checkFont)({ template: getTemplate(), font: getFont() });
            expect.anything();
        }
        catch (e) {
            fail();
        }
    });
    test('fail test: no fallback font', () => {
        const getFont = () => ({
            SauceHanSansJP: { data: sansData },
            SauceHanSerifJP: { data: serifData },
        });
        try {
            (0, font_1.checkFont)({ template: getTemplate(), font: getFont() });
            fail();
        }
        catch (e) {
            expect(e.message).toEqual('fallback flag is not found in font. true fallback flag must be only one.');
        }
    });
    test('fail test: too many fallback font', () => {
        const getFont = () => ({
            SauceHanSansJP: { data: sansData, fallback: true },
            SauceHanSerifJP: { data: serifData, fallback: true },
        });
        try {
            (0, font_1.checkFont)({ template: getTemplate(), font: getFont() });
            fail();
        }
        catch (e) {
            expect(e.message).toEqual('2 fallback flags found in font. true fallback flag must be only one.');
        }
    });
    test('fail test: fontName in Schemas not found in font(single)', () => {
        const _getTemplate = () => ({
            basePdf: src_1.BLANK_PDF,
            schemas: [
                {
                    a: {
                        type: 'text',
                        fontName: 'SauceHanSansJP2',
                        position: { x: 0, y: 0 },
                        width: 100,
                        height: 100,
                    },
                    b: {
                        type: 'text',
                        position: { x: 0, y: 0 },
                        width: 100,
                        height: 100,
                    },
                },
            ],
        });
        try {
            (0, font_1.checkFont)({ template: _getTemplate(), font: getSampleFont() });
            fail();
        }
        catch (e) {
            expect(e.message).toEqual('SauceHanSansJP2 of template.schemas is not found in font.');
        }
    });
    test('fail test: fontName in Schemas not found in font(single)', () => {
        const _getTemplate = () => ({
            basePdf: src_1.BLANK_PDF,
            schemas: [
                {
                    a: {
                        type: 'text',
                        fontName: 'SauceHanSansJP2',
                        position: { x: 0, y: 0 },
                        width: 100,
                        height: 100,
                    },
                    b: {
                        type: 'text',
                        fontName: 'SauceHanSerifJP2',
                        position: { x: 0, y: 0 },
                        width: 100,
                        height: 100,
                    },
                },
            ],
        });
        try {
            (0, font_1.checkFont)({ template: _getTemplate(), font: getSampleFont() });
            fail();
        }
        catch (e) {
            expect(e.message).toEqual('SauceHanSansJP2,SauceHanSerifJP2 of template.schemas is not found in font.');
        }
    });
});
describe('getSplitPosition test with mocked font width calculations', () => {
    /**
     * To simplify these tests we mock the widthOfTextAtSize function to return
     * the length of the text in number of characters.
     * Therefore, setting the boxWidthInPt to 5 should result in a split after 5 characters.
     */
    let widthOfTextAtSizeSpy;
    beforeAll(() => {
        // @ts-ignore
        widthOfTextAtSizeSpy = jest.spyOn(require('../src/font'), 'widthOfTextAtSize');
        widthOfTextAtSizeSpy.mockImplementation((text) => {
            return text.length;
        });
    });
    afterAll(() => {
        widthOfTextAtSizeSpy.mockRestore();
    });
    const mockedFont = {};
    const mockCalcValues = {
        font: mockedFont,
        fontSize: 12,
        characterSpacing: 1,
        boxWidthInPt: 5,
    };
    it('does not split an empty string', () => {
        expect((0, font_1.getSplittedLines)('', mockCalcValues)).toEqual(['']);
    });
    it('does not split a short line', () => {
        expect((0, font_1.getSplittedLines)('a', mockCalcValues)).toEqual(['a']);
        expect((0, font_1.getSplittedLines)('aaaa', mockCalcValues)).toEqual(['aaaa']);
    });
    it('splits a line to the nearest previous space', () => {
        expect((0, font_1.getSplittedLines)('aaa bbb', mockCalcValues)).toEqual(['aaa', 'bbb']);
    });
    it('splits a line where the split point is on a space', () => {
        expect((0, font_1.getSplittedLines)('aaaaa bbbbb', mockCalcValues)).toEqual(['aaaaa', 'bbbbb']);
    });
    it('splits a long line in the middle of a word if too long', () => {
        expect((0, font_1.getSplittedLines)('aaaaaa bbb', mockCalcValues)).toEqual(['aaaaa', 'a bbb']);
    });
    it('splits a long line without spaces at exactly 5 chars', () => {
        expect((0, font_1.getSplittedLines)('abcdef', mockCalcValues)).toEqual(['abcde', 'f']);
    });
    it('splits a very long line without spaces at exactly 5 chars', () => {
        expect((0, font_1.getSplittedLines)('abcdefghijklmn', mockCalcValues)).toEqual(['abcde', 'fghij', 'klmn']);
    });
    it('splits a line with lots of words', () => {
        expect((0, font_1.getSplittedLines)('a b c d e', mockCalcValues)).toEqual(['a b c', 'd e']);
    });
});
describe('getSplittedLines test with real font width calculations', () => {
    const font = (0, font_1.getDefaultFont)();
    const baseCalcValues = {
        fontSize: 12,
        characterSpacing: 1,
        boxWidthInPt: 40,
    };
    it('should not split a line when the text is shorter than the width', () => {
        (0, font_1.getFontKitFont)(getTextSchema(), font).then((fontKitFont) => {
            const fontWidthCalcs = Object.assign({}, baseCalcValues, { font: fontKitFont });
            const result = (0, font_1.getSplittedLines)('short', fontWidthCalcs);
            expect(result).toEqual(['short']);
        });
    });
    it('should split a line when the text is longer than the width', () => {
        (0, font_1.getFontKitFont)(getTextSchema(), font).then((fontKitFont) => {
            const fontWidthCalcs = Object.assign({}, baseCalcValues, { font: fontKitFont });
            const result = (0, font_1.getSplittedLines)('this will wrap', fontWidthCalcs);
            expect(result).toEqual(['this', 'will', 'wrap']);
        });
    });
    it('should split a line in the middle when unspaced text will not fit on a line', () => {
        (0, font_1.getFontKitFont)(getTextSchema(), font).then((fontKitFont) => {
            const fontWidthCalcs = Object.assign({}, baseCalcValues, { font: fontKitFont });
            const result = (0, font_1.getSplittedLines)('thiswillbecut', fontWidthCalcs);
            expect(result).toEqual(['thiswi', 'llbecu', 't']);
        });
    });
    it('should not split text when it is impossible due to size constraints', () => {
        (0, font_1.getFontKitFont)(getTextSchema(), font).then((fontKitFont) => {
            const fontWidthCalcs = Object.assign({}, baseCalcValues, { font: fontKitFont });
            fontWidthCalcs.boxWidthInPt = 2;
            const result = (0, font_1.getSplittedLines)('thiswillnotbecut', fontWidthCalcs);
            expect(result).toEqual(['thiswillnotbecut']);
        });
    });
});
describe('calculateDynamicFontSize with Default font', () => {
    const font = (0, font_1.getDefaultFont)();
    it('should return default font size when dynamicFontSizeSetting is not provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input: 'test' });
        expect(result).toBe(14);
    }));
    it('should return default font size when dynamicFontSizeSetting max is less than min', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.dynamicFontSize = { min: 11, max: 10 };
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input: 'test' });
        expect(result).toBe(14);
    }));
    it('should calculate a dynamic font size of vertical fit between min and max', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.dynamicFontSize = { min: 10, max: 30, fit: 'vertical' };
        const input = 'test with a length string\n and a new line';
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input });
        expect(result).toBe(19.25);
    }));
    it('should calculate a dynamic font size of horizontal fit between min and max', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.dynamicFontSize = { min: 10, max: 30, fit: 'horizontal' };
        const input = 'test with a length string\n and a new line';
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input });
        expect(result).toBe(11.25);
    }));
    it('should calculate a dynamic font size between min and max regardless of current font size', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.fontSize = 2;
        textSchema.dynamicFontSize = { min: 10, max: 30, fit: 'vertical' };
        const input = 'test with a length string\n and a new line';
        let result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input });
        expect(result).toBe(19.25);
        textSchema.fontSize = 40;
        result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input });
        expect(result).toBe(19.25);
    }));
    it('should return min font size when content is too big to fit given constraints', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.width = 10;
        textSchema.dynamicFontSize = { min: 10, max: 30, fit: 'vertical' };
        const input = 'test with a length string\n and a new line';
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input });
        expect(result).toBe(10);
    }));
    it('should return max font size when content is too small to fit given constraints', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.width = 1000;
        textSchema.dynamicFontSize = { min: 10, max: 30 };
        const input = 'test with a length string\n and a new line';
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input });
        expect(result).toBe(30);
    }));
    it('should not reduce font size below 0', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.dynamicFontSize = { min: -5, max: 10 };
        textSchema.width = 4;
        textSchema.height = 1;
        const input = 'a very \nlong \nmulti-line \nstring\nto';
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input });
        expect(result).toBeGreaterThan(0);
    }));
    it('should calculate a dynamic font size when a starting font size is passed that is lower than the eventual', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.dynamicFontSize = { min: 10, max: 30, fit: 'vertical' };
        const input = 'test with a length string\n and a new line';
        const startingFontSize = 18;
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input, startingFontSize });
        expect(result).toBe(19.25);
    }));
    it('should calculate a dynamic font size when a starting font size is passed that is higher than the eventual', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.dynamicFontSize = { min: 10, max: 30, fit: 'horizontal' };
        const input = 'test with a length string\n and a new line';
        const startingFontSize = 36;
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input, startingFontSize });
        expect(result).toBe(11.25);
    }));
    it('should calculate a dynamic font size using vertical fit as a default if no fit provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.dynamicFontSize = { min: 10, max: 30 };
        const input = 'test with a length string\n and a new line';
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input });
        expect(result).toBe(19.25);
    }));
});
describe('calculateDynamicFontSize with Custom font', () => {
    const font = getSampleFont();
    it('should return smaller font size when dynamicFontSizeSetting is provided with horizontal fit', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.dynamicFontSize = { min: 10, max: 30, fit: 'horizontal' };
        const input = 'あいうあいうあい';
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input });
        expect(result).toBe(16.75);
    }));
    it('should return smaller font size when dynamicFontSizeSetting is provided with vertical fit', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.dynamicFontSize = { min: 10, max: 30, fit: 'vertical' };
        const input = 'あいうあいうあい';
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input });
        expect(result).toBe(24.25);
    }));
    it('should return min font size when content is too big to fit given constraints', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.dynamicFontSize = { min: 20, max: 30 };
        const input = 'あいうあいうあいうあいうあいうあいうあいうあいうあいう';
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input });
        expect(result).toBe(20);
    }));
    it('should return max font size when content is too small to fit given constraints', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.dynamicFontSize = { min: 10, max: 30 };
        const input = 'あ';
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input });
        expect(result).toBe(30);
    }));
    it('should return min font size when content is multi-line with too many lines for the container', () => __awaiter(void 0, void 0, void 0, function* () {
        const textSchema = getTextSchema();
        textSchema.dynamicFontSize = { min: 5, max: 20 };
        const input = 'あ\nいう\nあ\nいう\nあ\nいう\nあ\nいう\nあ\nいう\nあ\nいう';
        const result = yield (0, font_1.calculateDynamicFontSize)({ textSchema, font, input });
        expect(result).toBe(5);
    }));
});
//# sourceMappingURL=font.test.js.map
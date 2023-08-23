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
const pdf_lib_1 = require("@pdfme/pdf-lib");
const fontkit = __importStar(require("fontkit"));
const common_1 = require("@pdfme/common");
const helper_js_1 = require("./helper.js");
const constants_js_1 = require("./constants.js");
const preprocessing = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const { template, font } = arg;
    const { basePdf } = template;
    const fallbackFontName = (0, common_1.getFallbackFontName)(font);
    const pdfDoc = yield pdf_lib_1.PDFDocument.create();
    // @ts-ignore
    pdfDoc.registerFontkit(fontkit);
    const pdfFontObj = yield (0, helper_js_1.embedAndGetFontObj)({ pdfDoc, font });
    const pagesAndBoxes = yield (0, helper_js_1.getEmbeddedPagesAndEmbedPdfBoxes)({ pdfDoc, basePdf });
    const { embeddedPages, embedPdfBoxes } = pagesAndBoxes;
    return { pdfDoc, pdfFontObj, fallbackFontName, embeddedPages, embedPdfBoxes };
});
const postProcessing = (pdfDoc, metadata) => {
    pdfDoc.setProducer(constants_js_1.TOOL_NAME);
    pdfDoc.setCreator(constants_js_1.TOOL_NAME);
    (metadata === null || metadata === void 0 ? void 0 : metadata.title) && pdfDoc.setTitle(metadata.title);
    (metadata === null || metadata === void 0 ? void 0 : metadata.subject) && pdfDoc.setSubject(metadata.subject);
    (metadata === null || metadata === void 0 ? void 0 : metadata.author) && pdfDoc.setAuthor(metadata.author);
    (metadata === null || metadata === void 0 ? void 0 : metadata.creator) && pdfDoc.setCreator(metadata.creator);
    (metadata === null || metadata === void 0 ? void 0 : metadata.producer) && pdfDoc.setProducer(metadata.producer);
    (metadata === null || metadata === void 0 ? void 0 : metadata.language) && pdfDoc.setLanguage(metadata.language);
    (metadata === null || metadata === void 0 ? void 0 : metadata.keywords) && pdfDoc.setKeywords(metadata.keywords);
    (metadata === null || metadata === void 0 ? void 0 : metadata.creation_date) && pdfDoc.setCreationDate(metadata.creation_date);
    (metadata === null || metadata === void 0 ? void 0 : metadata.modification_date) && pdfDoc.setModificationDate(metadata.modification_date);
};
const generate = (props) => __awaiter(void 0, void 0, void 0, function* () {
    (0, common_1.checkGenerateProps)(props);
    const { inputs, template, options = {}, metadata, b64 = false } = props;
    const { font = (0, common_1.getDefaultFont)() } = options;
    const { schemas } = template;
    const preRes = yield preprocessing({ inputs, template, font });
    const { pdfDoc, pdfFontObj, fallbackFontName, embeddedPages, embedPdfBoxes } = preRes;
    const inputImageCache = {};
    for (let i = 0; i < inputs.length; i += 1) {
        const inputObj = inputs[i];
        const keys = Object.keys(inputObj);
        for (let j = 0; j < embeddedPages.length; j += 1) {
            const embeddedPage = embeddedPages[j];
            const { width: pageWidth, height: pageHeight } = embeddedPage;
            const embedPdfBox = embedPdfBoxes[j];
            const page = pdfDoc.addPage([pageWidth, pageHeight]);
            (0, helper_js_1.drawEmbeddedPage)({ page, embeddedPage, embedPdfBox });
            for (let l = 0; l < keys.length; l += 1) {
                const key = keys[l];
                const schema = schemas[j];
                const templateSchema = schema[key];
                const input = inputObj[key];
                const fontSetting = { font, pdfFontObj, fallbackFontName };
                yield (0, helper_js_1.drawInputByTemplateSchema)({
                    input,
                    templateSchema,
                    pdfDoc,
                    page,
                    fontSetting,
                    inputImageCache,
                });
            }
        }
    }
    postProcessing(pdfDoc, metadata);
    if (b64) {
        return yield pdfDoc.saveAsBase64();
    }
    else {
        return yield pdfDoc.save();
    }
});
exports.default = generate;
//# sourceMappingURL=generate.js.map
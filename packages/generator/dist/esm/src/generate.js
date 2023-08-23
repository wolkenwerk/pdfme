var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PDFDocument } from '@pdfme/pdf-lib';
import * as fontkit from 'fontkit';
import { getDefaultFont, getFallbackFontName, checkGenerateProps, } from '@pdfme/common';
import { getEmbeddedPagesAndEmbedPdfBoxes, drawInputByTemplateSchema, drawEmbeddedPage, embedAndGetFontObj, } from './helper.js';
import { TOOL_NAME } from './constants.js';
const preprocessing = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    const { template, font } = arg;
    const { basePdf } = template;
    const fallbackFontName = getFallbackFontName(font);
    const pdfDoc = yield PDFDocument.create();
    // @ts-ignore
    pdfDoc.registerFontkit(fontkit);
    const pdfFontObj = yield embedAndGetFontObj({ pdfDoc, font });
    const pagesAndBoxes = yield getEmbeddedPagesAndEmbedPdfBoxes({ pdfDoc, basePdf });
    const { embeddedPages, embedPdfBoxes } = pagesAndBoxes;
    return { pdfDoc, pdfFontObj, fallbackFontName, embeddedPages, embedPdfBoxes };
});
const postProcessing = (pdfDoc) => {
    pdfDoc.setProducer(TOOL_NAME);
    pdfDoc.setCreator(TOOL_NAME);
};
const generate = (props) => __awaiter(void 0, void 0, void 0, function* () {
    checkGenerateProps(props);
    const { inputs, template, options = {} } = props;
    const { font = getDefaultFont() } = options;
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
            drawEmbeddedPage({ page, embeddedPage, embedPdfBox });
            for (let l = 0; l < keys.length; l += 1) {
                const key = keys[l];
                const schema = schemas[j];
                const templateSchema = schema[key];
                const input = inputObj[key];
                const fontSetting = { font, pdfFontObj, fallbackFontName };
                yield drawInputByTemplateSchema({
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
    postProcessing(pdfDoc);
    return pdfDoc.save();
});
export default generate;
//# sourceMappingURL=generate.js.map
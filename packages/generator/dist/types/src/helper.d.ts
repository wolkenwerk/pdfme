import { PDFPage, PDFFont, PDFDocument, PDFImage, PDFEmbeddedPage } from '@pdfme/pdf-lib';
import { Schema, Font, BasePdf, BarCodeType } from '@pdfme/common';
import { Buffer } from 'buffer';
export interface InputImageCache {
    [key: string]: PDFImage | undefined;
}
export declare const createBarCode: (arg: {
    type: BarCodeType;
    input: string;
    width: number;
    height: number;
    backgroundColor?: string;
}) => Promise<Buffer>;
declare type EmbedPdfBox = {
    mediaBox: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    bleedBox: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    trimBox: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
};
export declare const embedAndGetFontObj: (arg: {
    pdfDoc: PDFDocument;
    font: Font;
}) => Promise<{
    [key: string]: PDFFont;
}>;
export declare const getEmbeddedPagesAndEmbedPdfBoxes: (arg: {
    pdfDoc: PDFDocument;
    basePdf: BasePdf;
}) => Promise<{
    embeddedPages: PDFEmbeddedPage[];
    embedPdfBoxes: EmbedPdfBox[];
}>;
interface FontSetting {
    font: Font;
    pdfFontObj: {
        [key: string]: PDFFont;
    };
    fallbackFontName: string;
}
export declare const drawInputByTemplateSchema: (arg: {
    input: string;
    templateSchema: Schema;
    pdfDoc: PDFDocument;
    page: PDFPage;
    fontSetting: FontSetting;
    inputImageCache: InputImageCache;
}) => Promise<void>;
export declare const drawEmbeddedPage: (arg: {
    page: PDFPage;
    embeddedPage: PDFEmbeddedPage;
    embedPdfBox: EmbedPdfBox;
}) => void;
export {};

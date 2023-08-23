import { Template, SchemaForUI, SchemaType, BarCodeType, Size } from '@pdfme/common';
export declare const uuid: () => string;
export declare const set: <T extends object>(obj: T, path: string | string[], value: any) => void;
export declare const debounce: <T extends Function>(cb: T, wait?: number) => T;
export declare const round: (number: number, precision: number) => number;
export declare const cloneDeep: <T>(value: T) => T;
export declare const flatten: <T>(arr: T[][]) => T[];
declare const esc = "esc";
export declare const initShortCuts: (arg: {
    move: (command: 'up' | 'down' | 'left' | 'right', isShift: boolean) => void;
    remove: () => void;
    esc: () => void;
    copy: () => void;
    paste: () => void;
    redo: () => void;
    undo: () => void;
    save: () => void;
    selectAll: () => void;
}) => void;
export declare const destroyShortCuts: () => void;
export declare const readFiles: (files: FileList | null, type: 'text' | 'dataURL' | 'arrayBuffer') => Promise<string | ArrayBuffer>;
export declare const px2mm: (px: number) => number;
export declare const getPdfPageSizes: (pdfBlob: Blob) => Promise<{
    height: number;
    width: number;
}[]>;
export declare const pdf2Pngs: (pdfBlob: Blob, width: number) => Promise<string[]>;
export declare const b64toBlob: (base64: string) => Blob;
export declare const templateSchemas2SchemasList: (_template: Template) => Promise<({
    type: "text";
    data: string;
    key: string;
    id: string;
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    backgroundColor?: string | undefined;
    fontSize?: number | undefined;
    lineHeight?: number | undefined;
    rotate?: number | undefined;
    alignment?: "center" | "left" | "right" | undefined;
    fontName?: string | undefined;
    fontColor?: string | undefined;
    characterSpacing?: number | undefined;
    dynamicFontSize?: {
        max: number;
        min: number;
        fit?: string | undefined;
    } | undefined;
} | {
    type: "image";
    data: string;
    key: string;
    id: string;
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    rotate?: number | undefined;
} | {
    type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
    data: string;
    key: string;
    id: string;
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    rotate?: number | undefined;
})[][]>;
export declare const fmtTemplate: (template: Template, schemasList: SchemaForUI[][]) => Template;
export declare const getInitialSchema: () => SchemaForUI;
export declare const getSampleByType: (type: SchemaType) => string;
export declare const getKeepRatioHeightByWidth: (type: BarCodeType, width: number) => number;
export declare const getUniqSchemaKey: (arg: {
    copiedSchemaKey: string;
    schema: SchemaForUI[];
    stackUniqSchemaKeys: string[];
}) => string;
export declare const moveCommandToChangeSchemasArg: (props: {
    command: 'up' | 'down' | 'left' | 'right';
    activeSchemas: SchemaForUI[];
    isShift: boolean;
    pageSize: Size;
}) => {
    key: string;
    value: number;
    schemaId: string;
}[];
export declare const getPagesScrollTopByIndex: (pageSizes: {
    width: number;
    height: number;
}[], index: number, scale: number) => number;
export {};

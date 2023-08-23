import { Template, Size, UIProps, UIOptions, PreviewProps } from '@pdfme/common';
export declare abstract class BaseUIClass {
    protected domContainer: HTMLElement | null;
    protected template: Template;
    protected size: Size;
    private lang;
    private font;
    private readonly setSize;
    resizeObserver: ResizeObserver;
    constructor(props: UIProps);
    protected getI18n(): (key: "type" | "field" | "cancel" | "fieldName" | "require" | "uniq" | "inputExample" | "edit" | "plsInputName" | "fieldMustUniq" | "notUniq" | "noKeyName" | "fieldsList" | "addNewField" | "editField" | "errorOccurred" | "errorBulkUpdateFieldName" | "commitBulkUpdateFieldName" | "bulkUpdateFieldName") => string;
    protected getFont(): Record<string, {
        data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }>;
    getTemplate(): {
        schemas: Record<string, {
            type: "text";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
            alignment?: "center" | "left" | "right" | undefined;
            fontSize?: number | undefined;
            fontName?: string | undefined;
            fontColor?: string | undefined;
            backgroundColor?: string | undefined;
            characterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            dynamicFontSize?: {
                max: number;
                min: number;
                fit?: string | undefined;
            } | undefined;
        } | {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        } | {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>[];
        basePdf: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
        sampledata?: Record<string, string>[] | undefined;
        columns?: string[] | undefined;
    };
    updateTemplate(template: Template): void;
    updateOptions(options: UIOptions): void;
    destroy(): void;
    protected abstract render(): void;
}
export declare abstract class PreviewUI extends BaseUIClass {
    protected inputs: {
        [key: string]: string;
    }[];
    constructor(props: PreviewProps);
    getInputs(): {
        [key: string]: string;
    }[];
    setInputs(inputs: {
        [key: string]: string;
    }[]): void;
    protected abstract render(): void;
}

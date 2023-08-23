import { DesignerReactProps, Template } from '@pdfme/common';
declare const TemplateEditor: ({ template, size, onSaveTemplate, onChangeTemplate, }: {
    template: {
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
    size: {
        height: number;
        width: number;
    };
    onSaveTemplate: (args_0: {
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
    }, ...args_1: unknown[]) => void;
    options?: {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    } | undefined;
} & {
    onChangeTemplate: (t: Template) => void;
}) => JSX.Element;
export default TemplateEditor;

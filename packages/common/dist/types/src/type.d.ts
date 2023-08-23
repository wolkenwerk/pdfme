import { z } from 'zod';
import type { Font as FontKitFont } from 'fontkit';
import { Lang, Size, Alignment, BarcodeSchemaType, SchemaType, CommonSchema as _CommonSchema, TextSchema, ImageSchema, BarcodeSchema, Schema, SchemaInputs, SchemaForUI, Font, BasePdf, Template, CommonProps, GeneratorOptions, GenerateProps, UIOptions, UIProps, PreviewProps, PreviewReactProps, DesignerProps, DesignerReactProps } from './schema.js';
export declare type FontWidthCalcValues = {
    font: FontKitFont;
    fontSize: number;
    characterSpacing: number;
    boxWidthInPt: number;
};
declare type CommonSchema = z.infer<typeof _CommonSchema>;
export declare const schemaTypes: readonly ["text", "image", "qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"];
export declare const isTextSchema: (arg: CommonSchema) => arg is {
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
};
export declare const isImageSchema: (arg: CommonSchema) => arg is {
    type: "image";
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    rotate?: number | undefined;
};
export declare const isBarcodeSchema: (arg: CommonSchema) => arg is {
    type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    rotate?: number | undefined;
};
export declare type Lang = z.infer<typeof Lang>;
export declare type Size = z.infer<typeof Size>;
export declare type Alignment = z.infer<typeof Alignment>;
export declare type SchemaType = z.infer<typeof SchemaType>;
export declare type BarCodeType = z.infer<typeof BarcodeSchemaType>;
export declare type TextSchema = z.infer<typeof TextSchema>;
export declare type ImageSchema = z.infer<typeof ImageSchema>;
export declare type BarcodeSchema = z.infer<typeof BarcodeSchema>;
export declare type Schema = z.infer<typeof Schema>;
export declare type SchemaInputs = z.infer<typeof SchemaInputs>;
export declare type SchemaForUI = z.infer<typeof SchemaForUI>;
export declare type Font = z.infer<typeof Font>;
export declare type BasePdf = z.infer<typeof BasePdf>;
export declare type Template = z.infer<typeof Template>;
export declare type CommonProps = z.infer<typeof CommonProps>;
export declare type GeneratorOptions = z.infer<typeof GeneratorOptions>;
export declare type GenerateProps = z.infer<typeof GenerateProps>;
export declare type UIOptions = z.infer<typeof UIOptions>;
export declare type UIProps = z.infer<typeof UIProps>;
export declare type PreviewProps = z.infer<typeof PreviewProps>;
export declare type PreviewReactProps = z.infer<typeof PreviewReactProps>;
export declare type DesignerProps = z.infer<typeof DesignerProps>;
export declare type DesignerReactProps = z.infer<typeof DesignerReactProps>;
export {};

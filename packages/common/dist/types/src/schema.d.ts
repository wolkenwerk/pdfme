import { z } from 'zod';
export declare const Lang: z.ZodEnum<["en", "ja", "ar", "th", "pl"]>;
export declare const Size: z.ZodObject<{
    height: z.ZodNumber;
    width: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    height: number;
    width: number;
}, {
    height: number;
    width: number;
}>;
export declare const Alignment: z.ZodEnum<["left", "center", "right"]>;
export declare const barcodeSchemaTypes: readonly ["qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"];
export declare const schemaTypes: readonly ["text", "image", "qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"];
export declare const BarcodeSchemaType: z.ZodEnum<["qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
export declare const SchemaType: z.ZodEnum<["text", "image", "qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
export declare const CommonSchema: z.ZodObject<{
    type: z.ZodEnum<["text", "image", "qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    rotate: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "image" | "text" | "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    rotate?: number | undefined;
}, {
    type: "image" | "text" | "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    rotate?: number | undefined;
}>;
export declare const TextSchema: z.ZodObject<{
    height: z.ZodNumber;
    width: z.ZodNumber;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    rotate: z.ZodOptional<z.ZodNumber>;
    type: z.ZodLiteral<"text">;
    alignment: z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>;
    fontSize: z.ZodOptional<z.ZodNumber>;
    fontName: z.ZodOptional<z.ZodString>;
    fontColor: z.ZodOptional<z.ZodString>;
    backgroundColor: z.ZodOptional<z.ZodString>;
    characterSpacing: z.ZodOptional<z.ZodNumber>;
    lineHeight: z.ZodOptional<z.ZodNumber>;
    dynamicFontSize: z.ZodOptional<z.ZodObject<{
        max: z.ZodNumber;
        min: z.ZodNumber;
        fit: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        max: number;
        min: number;
        fit?: string | undefined;
    }, {
        max: number;
        min: number;
        fit?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export declare const ImageSchema: z.ZodObject<{
    height: z.ZodNumber;
    width: z.ZodNumber;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    rotate: z.ZodOptional<z.ZodNumber>;
    type: z.ZodLiteral<"image">;
}, "strip", z.ZodTypeAny, {
    type: "image";
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    rotate?: number | undefined;
}, {
    type: "image";
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    rotate?: number | undefined;
}>;
export declare const BarcodeSchema: z.ZodObject<{
    height: z.ZodNumber;
    width: z.ZodNumber;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    rotate: z.ZodOptional<z.ZodNumber>;
    type: z.ZodEnum<["qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
}, "strip", z.ZodTypeAny, {
    type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    rotate?: number | undefined;
}, {
    type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    rotate?: number | undefined;
}>;
export declare const Schema: z.ZodUnion<[z.ZodObject<{
    height: z.ZodNumber;
    width: z.ZodNumber;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    rotate: z.ZodOptional<z.ZodNumber>;
    type: z.ZodLiteral<"text">;
    alignment: z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>;
    fontSize: z.ZodOptional<z.ZodNumber>;
    fontName: z.ZodOptional<z.ZodString>;
    fontColor: z.ZodOptional<z.ZodString>;
    backgroundColor: z.ZodOptional<z.ZodString>;
    characterSpacing: z.ZodOptional<z.ZodNumber>;
    lineHeight: z.ZodOptional<z.ZodNumber>;
    dynamicFontSize: z.ZodOptional<z.ZodObject<{
        max: z.ZodNumber;
        min: z.ZodNumber;
        fit: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        max: number;
        min: number;
        fit?: string | undefined;
    }, {
        max: number;
        min: number;
        fit?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>, z.ZodObject<{
    height: z.ZodNumber;
    width: z.ZodNumber;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    rotate: z.ZodOptional<z.ZodNumber>;
    type: z.ZodLiteral<"image">;
}, "strip", z.ZodTypeAny, {
    type: "image";
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    rotate?: number | undefined;
}, {
    type: "image";
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    rotate?: number | undefined;
}>, z.ZodObject<{
    height: z.ZodNumber;
    width: z.ZodNumber;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    rotate: z.ZodOptional<z.ZodNumber>;
    type: z.ZodEnum<["qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
}, "strip", z.ZodTypeAny, {
    type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    rotate?: number | undefined;
}, {
    type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
    height: number;
    width: number;
    position: {
        x: number;
        y: number;
    };
    rotate?: number | undefined;
}>]>;
export declare const SchemaForUI: z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"text">;
    height: z.ZodNumber;
    width: z.ZodNumber;
    backgroundColor: z.ZodOptional<z.ZodString>;
    fontSize: z.ZodOptional<z.ZodNumber>;
    lineHeight: z.ZodOptional<z.ZodNumber>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    rotate: z.ZodOptional<z.ZodNumber>;
    alignment: z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>;
    fontName: z.ZodOptional<z.ZodString>;
    fontColor: z.ZodOptional<z.ZodString>;
    characterSpacing: z.ZodOptional<z.ZodNumber>;
    dynamicFontSize: z.ZodOptional<z.ZodObject<{
        max: z.ZodNumber;
        min: z.ZodNumber;
        fit: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        max: number;
        min: number;
        fit?: string | undefined;
    }, {
        max: number;
        min: number;
        fit?: string | undefined;
    }>>;
    id: z.ZodString;
    key: z.ZodString;
    data: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>, z.ZodObject<{
    type: z.ZodLiteral<"image">;
    height: z.ZodNumber;
    width: z.ZodNumber;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    rotate: z.ZodOptional<z.ZodNumber>;
    id: z.ZodString;
    key: z.ZodString;
    data: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>, z.ZodObject<{
    type: z.ZodEnum<["qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
    height: z.ZodNumber;
    width: z.ZodNumber;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
    rotate: z.ZodOptional<z.ZodNumber>;
    id: z.ZodString;
    key: z.ZodString;
    data: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>]>;
export declare const Font: z.ZodRecord<z.ZodString, z.ZodObject<{
    data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
    fallback: z.ZodOptional<z.ZodBoolean>;
    subset: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
    fallback?: boolean | undefined;
    subset?: boolean | undefined;
}, {
    data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
    fallback?: boolean | undefined;
    subset?: boolean | undefined;
}>>;
export declare const BasePdf: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
export declare const Template: z.ZodObject<{
    schemas: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
        height: z.ZodNumber;
        width: z.ZodNumber;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        rotate: z.ZodOptional<z.ZodNumber>;
        type: z.ZodLiteral<"text">;
        alignment: z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>;
        fontSize: z.ZodOptional<z.ZodNumber>;
        fontName: z.ZodOptional<z.ZodString>;
        fontColor: z.ZodOptional<z.ZodString>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        characterSpacing: z.ZodOptional<z.ZodNumber>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        dynamicFontSize: z.ZodOptional<z.ZodObject<{
            max: z.ZodNumber;
            min: z.ZodNumber;
            fit: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            fit?: string | undefined;
        }, {
            max: number;
            min: number;
            fit?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, z.ZodObject<{
        height: z.ZodNumber;
        width: z.ZodNumber;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        rotate: z.ZodOptional<z.ZodNumber>;
        type: z.ZodLiteral<"image">;
    }, "strip", z.ZodTypeAny, {
        type: "image";
        height: number;
        width: number;
        position: {
            x: number;
            y: number;
        };
        rotate?: number | undefined;
    }, {
        type: "image";
        height: number;
        width: number;
        position: {
            x: number;
            y: number;
        };
        rotate?: number | undefined;
    }>, z.ZodObject<{
        height: z.ZodNumber;
        width: z.ZodNumber;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            y: number;
        }, {
            x: number;
            y: number;
        }>;
        rotate: z.ZodOptional<z.ZodNumber>;
        type: z.ZodEnum<["qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
    }, "strip", z.ZodTypeAny, {
        type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
        height: number;
        width: number;
        position: {
            x: number;
            y: number;
        };
        rotate?: number | undefined;
    }, {
        type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
        height: number;
        width: number;
        position: {
            x: number;
            y: number;
        };
        rotate?: number | undefined;
    }>]>>, "many">;
    basePdf: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
    sampledata: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">>;
    columns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export declare const Inputs: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">;
export declare const CommonProps: z.ZodObject<{
    template: z.ZodObject<{
        schemas: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"text">;
            alignment: z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontName: z.ZodOptional<z.ZodString>;
            fontColor: z.ZodOptional<z.ZodString>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            characterSpacing: z.ZodOptional<z.ZodNumber>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            dynamicFontSize: z.ZodOptional<z.ZodObject<{
                max: z.ZodNumber;
                min: z.ZodNumber;
                fit: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                max: number;
                min: number;
                fit?: string | undefined;
            }, {
                max: number;
                min: number;
                fit?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"image">;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodEnum<["qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
        }, "strip", z.ZodTypeAny, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>]>>, "many">;
        basePdf: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
        sampledata: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">>;
        columns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
    options: z.ZodOptional<z.ZodObject<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
    }, {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
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
    options?: {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
    } | undefined;
}, {
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
    options?: {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
    } | undefined;
}>;
export declare const GeneratorOptions: z.ZodObject<{
    font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
        fallback: z.ZodOptional<z.ZodBoolean>;
        subset: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }, {
        data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    font?: Record<string, {
        data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }> | undefined;
}, {
    font?: Record<string, {
        data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }> | undefined;
}>;
export declare const GenerateProps: z.ZodObject<{
    template: z.ZodObject<{
        schemas: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"text">;
            alignment: z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontName: z.ZodOptional<z.ZodString>;
            fontColor: z.ZodOptional<z.ZodString>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            characterSpacing: z.ZodOptional<z.ZodNumber>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            dynamicFontSize: z.ZodOptional<z.ZodObject<{
                max: z.ZodNumber;
                min: z.ZodNumber;
                fit: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                max: number;
                min: number;
                fit?: string | undefined;
            }, {
                max: number;
                min: number;
                fit?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"image">;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodEnum<["qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
        }, "strip", z.ZodTypeAny, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>]>>, "many">;
        basePdf: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
        sampledata: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">>;
        columns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
    inputs: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">;
    options: z.ZodOptional<z.ZodObject<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
    }, {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
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
    inputs: Record<string, string>[];
    options?: {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
    } | undefined;
}, {
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
    inputs: Record<string, string>[];
    options?: {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
    } | undefined;
}>;
export declare const SchemaInputs: z.ZodRecord<z.ZodString, z.ZodString>;
export declare const UIOptions: z.ZodObject<{
    font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
        fallback: z.ZodOptional<z.ZodBoolean>;
        subset: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }, {
        data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }>>>;
    lang: z.ZodOptional<z.ZodEnum<["en", "ja", "ar", "th", "pl"]>>;
}, "strip", z.ZodTypeAny, {
    font?: Record<string, {
        data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }> | undefined;
    lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
}, {
    font?: Record<string, {
        data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
        fallback?: boolean | undefined;
        subset?: boolean | undefined;
    }> | undefined;
    lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
}>;
export declare const UIProps: z.ZodObject<{
    template: z.ZodObject<{
        schemas: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"text">;
            alignment: z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontName: z.ZodOptional<z.ZodString>;
            fontColor: z.ZodOptional<z.ZodString>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            characterSpacing: z.ZodOptional<z.ZodNumber>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            dynamicFontSize: z.ZodOptional<z.ZodObject<{
                max: z.ZodNumber;
                min: z.ZodNumber;
                fit: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                max: number;
                min: number;
                fit?: string | undefined;
            }, {
                max: number;
                min: number;
                fit?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"image">;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodEnum<["qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
        }, "strip", z.ZodTypeAny, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>]>>, "many">;
        basePdf: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
        sampledata: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">>;
        columns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
    domContainer: z.ZodType<HTMLElement, z.ZodTypeDef, HTMLElement>;
    options: z.ZodOptional<z.ZodObject<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
        lang: z.ZodOptional<z.ZodEnum<["en", "ja", "ar", "th", "pl"]>>;
    }, "strip", z.ZodTypeAny, {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    }, {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
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
    domContainer: HTMLElement;
    options?: {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    } | undefined;
}, {
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
    domContainer: HTMLElement;
    options?: {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    } | undefined;
}>;
export declare const PreviewProps: z.ZodObject<{
    template: z.ZodObject<{
        schemas: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"text">;
            alignment: z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontName: z.ZodOptional<z.ZodString>;
            fontColor: z.ZodOptional<z.ZodString>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            characterSpacing: z.ZodOptional<z.ZodNumber>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            dynamicFontSize: z.ZodOptional<z.ZodObject<{
                max: z.ZodNumber;
                min: z.ZodNumber;
                fit: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                max: number;
                min: number;
                fit?: string | undefined;
            }, {
                max: number;
                min: number;
                fit?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"image">;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodEnum<["qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
        }, "strip", z.ZodTypeAny, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>]>>, "many">;
        basePdf: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
        sampledata: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">>;
        columns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
    options: z.ZodOptional<z.ZodObject<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
        lang: z.ZodOptional<z.ZodEnum<["en", "ja", "ar", "th", "pl"]>>;
    }, "strip", z.ZodTypeAny, {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    }, {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    }>>;
    domContainer: z.ZodType<HTMLElement, z.ZodTypeDef, HTMLElement>;
    inputs: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">;
}, "strict", z.ZodTypeAny, {
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
    inputs: Record<string, string>[];
    domContainer: HTMLElement;
    options?: {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    } | undefined;
}, {
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
    inputs: Record<string, string>[];
    domContainer: HTMLElement;
    options?: {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    } | undefined;
}>;
export declare const PreviewReactProps: z.ZodObject<{
    template: z.ZodObject<{
        schemas: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"text">;
            alignment: z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontName: z.ZodOptional<z.ZodString>;
            fontColor: z.ZodOptional<z.ZodString>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            characterSpacing: z.ZodOptional<z.ZodNumber>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            dynamicFontSize: z.ZodOptional<z.ZodObject<{
                max: z.ZodNumber;
                min: z.ZodNumber;
                fit: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                max: number;
                min: number;
                fit?: string | undefined;
            }, {
                max: number;
                min: number;
                fit?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"image">;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodEnum<["qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
        }, "strip", z.ZodTypeAny, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>]>>, "many">;
        basePdf: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
        sampledata: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">>;
        columns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
    options: z.ZodOptional<z.ZodObject<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
        lang: z.ZodOptional<z.ZodEnum<["en", "ja", "ar", "th", "pl"]>>;
    }, "strip", z.ZodTypeAny, {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    }, {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    }>>;
    inputs: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">;
    onChangeInput: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodObject<{
        index: z.ZodNumber;
        value: z.ZodString;
        key: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        index: number;
        key: string;
        value: string;
    }, {
        index: number;
        key: string;
        value: string;
    }>], z.ZodUnknown>, z.ZodVoid>>;
    size: z.ZodObject<{
        height: z.ZodNumber;
        width: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        height: number;
        width: number;
    }, {
        height: number;
        width: number;
    }>;
}, "strict", z.ZodTypeAny, {
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
    inputs: Record<string, string>[];
    options?: {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    } | undefined;
    onChangeInput?: ((args_0: {
        index: number;
        key: string;
        value: string;
    }, ...args_1: unknown[]) => void) | undefined;
}, {
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
    inputs: Record<string, string>[];
    options?: {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    } | undefined;
    onChangeInput?: ((args_0: {
        index: number;
        key: string;
        value: string;
    }, ...args_1: unknown[]) => void) | undefined;
}>;
export declare const DesignerProps: z.ZodObject<{
    template: z.ZodObject<{
        schemas: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"text">;
            alignment: z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontName: z.ZodOptional<z.ZodString>;
            fontColor: z.ZodOptional<z.ZodString>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            characterSpacing: z.ZodOptional<z.ZodNumber>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            dynamicFontSize: z.ZodOptional<z.ZodObject<{
                max: z.ZodNumber;
                min: z.ZodNumber;
                fit: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                max: number;
                min: number;
                fit?: string | undefined;
            }, {
                max: number;
                min: number;
                fit?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"image">;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodEnum<["qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
        }, "strip", z.ZodTypeAny, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>]>>, "many">;
        basePdf: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
        sampledata: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">>;
        columns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
    options: z.ZodOptional<z.ZodObject<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
        lang: z.ZodOptional<z.ZodEnum<["en", "ja", "ar", "th", "pl"]>>;
    }, "strip", z.ZodTypeAny, {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    }, {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    }>>;
    domContainer: z.ZodType<HTMLElement, z.ZodTypeDef, HTMLElement>;
}, "strict", z.ZodTypeAny, {
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
    domContainer: HTMLElement;
    options?: {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    } | undefined;
}, {
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
    domContainer: HTMLElement;
    options?: {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    } | undefined;
}>;
export declare const DesignerReactProps: z.ZodObject<{
    template: z.ZodObject<{
        schemas: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"text">;
            alignment: z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontName: z.ZodOptional<z.ZodString>;
            fontColor: z.ZodOptional<z.ZodString>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            characterSpacing: z.ZodOptional<z.ZodNumber>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            dynamicFontSize: z.ZodOptional<z.ZodObject<{
                max: z.ZodNumber;
                min: z.ZodNumber;
                fit: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                max: number;
                min: number;
                fit?: string | undefined;
            }, {
                max: number;
                min: number;
                fit?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"image">;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodEnum<["qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
        }, "strip", z.ZodTypeAny, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>]>>, "many">;
        basePdf: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
        sampledata: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">>;
        columns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
    options: z.ZodOptional<z.ZodObject<{
        font: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            data: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
            fallback: z.ZodOptional<z.ZodBoolean>;
            subset: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }>>>;
        lang: z.ZodOptional<z.ZodEnum<["en", "ja", "ar", "th", "pl"]>>;
    }, "strip", z.ZodTypeAny, {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    }, {
        font?: Record<string, {
            data: (string | ArrayBuffer | Uint8Array) & (string | ArrayBuffer | Uint8Array | undefined);
            fallback?: boolean | undefined;
            subset?: boolean | undefined;
        }> | undefined;
        lang?: "th" | "en" | "ja" | "ar" | "pl" | undefined;
    }>>;
    onSaveTemplate: z.ZodFunction<z.ZodTuple<[z.ZodObject<{
        schemas: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"text">;
            alignment: z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontName: z.ZodOptional<z.ZodString>;
            fontColor: z.ZodOptional<z.ZodString>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            characterSpacing: z.ZodOptional<z.ZodNumber>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            dynamicFontSize: z.ZodOptional<z.ZodObject<{
                max: z.ZodNumber;
                min: z.ZodNumber;
                fit: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                max: number;
                min: number;
                fit?: string | undefined;
            }, {
                max: number;
                min: number;
                fit?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodLiteral<"image">;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "image";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>, z.ZodObject<{
            height: z.ZodNumber;
            width: z.ZodNumber;
            position: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                y: number;
            }, {
                x: number;
                y: number;
            }>;
            rotate: z.ZodOptional<z.ZodNumber>;
            type: z.ZodEnum<["qrcode", "japanpost", "ean13", "ean8", "code39", "code128", "nw7", "itf14", "upca", "upce", "gs1datamatrix"]>;
        }, "strip", z.ZodTypeAny, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }, {
            type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
            height: number;
            width: number;
            position: {
                x: number;
                y: number;
            };
            rotate?: number | undefined;
        }>]>>, "many">;
        basePdf: z.ZodUnion<[z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>;
        sampledata: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodString>, "many">>;
        columns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>], z.ZodUnknown>, z.ZodVoid>;
    size: z.ZodObject<{
        height: z.ZodNumber;
        width: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        height: number;
        width: number;
    }, {
        height: number;
        width: number;
    }>;
}, "strict", z.ZodTypeAny, {
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
}, {
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
}>;

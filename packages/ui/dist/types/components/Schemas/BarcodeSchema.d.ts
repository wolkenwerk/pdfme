import React from 'react';
import { SchemaUIProps } from './SchemaUI';
declare const _default: React.ForwardRefExoticComponent<SchemaUIProps & {
    schema: {
        type: "qrcode" | "japanpost" | "ean13" | "ean8" | "code39" | "code128" | "nw7" | "itf14" | "upca" | "upce" | "gs1datamatrix";
        height: number;
        width: number;
        position: {
            x: number;
            y: number;
        };
        rotate?: number | undefined;
    };
} & React.RefAttributes<HTMLInputElement>>;
export default _default;

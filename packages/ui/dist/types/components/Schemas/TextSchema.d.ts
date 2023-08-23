import React from 'react';
import { SchemaUIProps } from './SchemaUI';
declare const _default: React.ForwardRefExoticComponent<SchemaUIProps & {
    schema: {
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
} & React.RefAttributes<HTMLTextAreaElement>>;
export default _default;

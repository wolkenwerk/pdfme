import React from 'react';
import { SchemaUIProps } from './SchemaUI';
declare const _default: React.ForwardRefExoticComponent<SchemaUIProps & {
    schema: {
        type: "image";
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

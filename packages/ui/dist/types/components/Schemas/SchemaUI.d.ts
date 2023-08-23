import React from 'react';
import { SchemaForUI } from '@pdfme/common';
export interface SchemaUIProps {
    schema: SchemaForUI;
    editable: boolean;
    onChange: (value: string) => void;
    onStopEditing: () => void;
    tabIndex?: number;
    placeholder?: string;
}
declare const _default: React.ForwardRefExoticComponent<SchemaUIProps & {
    outline: string;
    onChangeHoveringSchemaId?: ((id: string | null) => void) | undefined;
} & React.RefAttributes<HTMLTextAreaElement | HTMLInputElement>>;
export default _default;

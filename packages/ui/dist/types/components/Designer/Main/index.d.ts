import React, { MutableRefObject } from 'react';
import { SchemaForUI, Size } from '@pdfme/common';
interface Props {
    height: number;
    hoveringSchemaId: string | null;
    onChangeHoveringSchemaId: (id: string | null) => void;
    pageCursor: number;
    schemasList: SchemaForUI[][];
    scale: number;
    backgrounds: string[];
    pageSizes: Size[];
    size: Size;
    activeElements: HTMLElement[];
    onEdit: (targets: HTMLElement[]) => void;
    changeSchemas: (objs: {
        key: string;
        value: string | number;
        schemaId: string;
    }[]) => void;
    removeSchemas: (ids: string[]) => void;
    paperRefs: MutableRefObject<HTMLDivElement[]>;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default _default;

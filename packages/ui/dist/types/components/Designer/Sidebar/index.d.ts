import { SchemaForUI, Size } from '@pdfme/common';
export declare type SidebarProps = {
    height: number;
    hoveringSchemaId: string | null;
    onChangeHoveringSchemaId: (id: string | null) => void;
    size: Size;
    pageSize: Size;
    activeElements: HTMLElement[];
    schemas: SchemaForUI[];
    onSortEnd: (sortedSchemas: SchemaForUI[]) => void;
    onEdit: (id: string) => void;
    onEditEnd: () => void;
    changeSchemas: (objs: {
        key: string;
        value: undefined | string | number | {
            min: number;
            max: number;
        };
        schemaId: string;
    }[]) => void;
    addSchema: () => void;
};
declare const Sidebar: (props: SidebarProps) => JSX.Element;
export default Sidebar;

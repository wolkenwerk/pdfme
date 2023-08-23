import { RefObject } from 'react';
import { Template, Size } from '@pdfme/common';
export declare const usePrevious: <T>(value: T) => T | null;
declare type UIPreProcessorProps = {
    template: Template;
    size: Size;
    zoomLevel: number;
};
export declare const useUIPreProcessor: ({ template, size, zoomLevel }: UIPreProcessorProps) => {
    backgrounds: string[];
    pageSizes: {
        height: number;
        width: number;
    }[];
    scale: number;
    error: Error | null;
};
declare type ScrollPageCursorProps = {
    ref: RefObject<HTMLDivElement>;
    pageSizes: Size[];
    scale: number;
    pageCursor: number;
    onChangePageCursor: (page: number) => void;
};
export declare const useScrollPageCursor: ({ ref, pageSizes, scale, pageCursor, onChangePageCursor, }: ScrollPageCursorProps) => void;
export declare const useMountStatus: () => boolean;
export {};

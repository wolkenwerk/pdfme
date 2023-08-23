import * as fontkit from 'fontkit';
import type { Font as FontKitFont } from 'fontkit';
import { FontWidthCalcValues, Template, Font, TextSchema } from './type';
export declare const getFallbackFontName: (font: Font) => string;
export declare const getDefaultFont: () => Font;
export declare const checkFont: (arg: {
    font: Font;
    template: Template;
}) => void;
export declare const getFontAlignmentValue: (fontKitFont: FontKitFont, fontSize: number) => number;
export declare const heightOfFontAtSize: (fontKitFont: FontKitFont, fontSize: number) => number;
export declare const widthOfTextAtSize: (text: string, fontKitFont: FontKitFont, fontSize: number, characterSpacing: number) => number;
export declare const getFontKitFont: (textSchema: TextSchema, font: Font) => Promise<fontkit.Font>;
/**
 * Recursively splits the line at getSplitPosition.
 * If there is some leftover, split the rest again in the same manner.
 */
export declare const getSplittedLines: (textLine: string, calcValues: FontWidthCalcValues) => string[];
/**
 * If using dynamic font size, iteratively increment or decrement the
 * font size to fit the containing box.
 * Calculating space usage involves splitting lines where they exceed
 * the box width based on the proposed size.
 */
export declare const calculateDynamicFontSize: ({ textSchema, font, input, startingFontSize, }: {
    textSchema: TextSchema;
    font: Font;
    input: string;
    startingFontSize?: number | undefined;
}) => Promise<number>;

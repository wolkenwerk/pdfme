import { PreviewProps } from '@pdfme/common';
import { PreviewUI } from './class';
declare class Viewer extends PreviewUI {
    constructor(props: PreviewProps);
    protected render(): void;
}
export default Viewer;

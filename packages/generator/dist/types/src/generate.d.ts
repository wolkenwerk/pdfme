import type { GenerateProps } from '@pdfme/common';
declare const generate: (props: GenerateProps) => Promise<string | Uint8Array>;
export default generate;

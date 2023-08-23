"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignerReactProps = exports.DesignerProps = exports.PreviewReactProps = exports.PreviewProps = exports.UIProps = exports.UIOptions = exports.SchemaInputs = exports.GenerateProps = exports.GeneratorOptions = exports.CommonProps = exports.Inputs = exports.Template = exports.BasePdf = exports.Font = exports.SchemaForUI = exports.Schema = exports.BarcodeSchema = exports.ImageSchema = exports.TextSchema = exports.CommonSchema = exports.SchemaType = exports.BarcodeSchemaType = exports.schemaTypes = exports.barcodeSchemaTypes = exports.Alignment = exports.Size = exports.Lang = void 0;
/* eslint dot-notation: "off"*/
const zod_1 = require("zod");
const langs = ['en', 'ja', 'ar', 'th', 'pl'];
exports.Lang = zod_1.z.enum(langs);
exports.Size = zod_1.z.object({ height: zod_1.z.number(), width: zod_1.z.number() });
const alignments = ['left', 'center', 'right'];
exports.Alignment = zod_1.z.enum(alignments);
// prettier-ignore
exports.barcodeSchemaTypes = ['qrcode', 'japanpost', 'ean13', 'ean8', 'code39', 'code128', 'nw7', 'itf14', 'upca', 'upce', 'gs1datamatrix'];
const notBarcodeSchemaTypes = ['text', 'image'];
exports.schemaTypes = [...notBarcodeSchemaTypes, ...exports.barcodeSchemaTypes];
exports.BarcodeSchemaType = zod_1.z.enum(exports.barcodeSchemaTypes);
exports.SchemaType = zod_1.z.enum(exports.schemaTypes);
exports.CommonSchema = zod_1.z.object({
    type: exports.SchemaType,
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number() }),
    width: zod_1.z.number(),
    height: zod_1.z.number(),
    rotate: zod_1.z.number().optional(),
});
exports.TextSchema = exports.CommonSchema.extend({
    type: zod_1.z.literal(exports.SchemaType.Enum.text),
    alignment: exports.Alignment.optional(),
    fontSize: zod_1.z.number().optional(),
    fontName: zod_1.z.string().optional(),
    fontColor: zod_1.z.string().optional(),
    backgroundColor: zod_1.z.string().optional(),
    characterSpacing: zod_1.z.number().optional(),
    lineHeight: zod_1.z.number().optional(),
    dynamicFontSize: zod_1.z.object({
        max: zod_1.z.number(),
        min: zod_1.z.number(),
        fit: zod_1.z.string().optional(),
    }).optional(),
});
exports.ImageSchema = exports.CommonSchema.extend({ type: zod_1.z.literal(exports.SchemaType.Enum.image) });
exports.BarcodeSchema = exports.CommonSchema.extend({ type: exports.BarcodeSchemaType });
exports.Schema = zod_1.z.union([exports.TextSchema, exports.ImageSchema, exports.BarcodeSchema]);
const SchemaForUIAdditionalInfo = zod_1.z.object({
    id: zod_1.z.string(), key: zod_1.z.string(), data: zod_1.z.string(),
});
exports.SchemaForUI = zod_1.z.union([
    exports.TextSchema.merge(SchemaForUIAdditionalInfo),
    exports.ImageSchema.merge(SchemaForUIAdditionalInfo),
    exports.BarcodeSchema.merge(SchemaForUIAdditionalInfo),
]);
const ArrayBufferSchema = zod_1.z.any().refine((v) => v instanceof ArrayBuffer);
const Uint8ArraySchema = zod_1.z.any().refine((v) => v instanceof Uint8Array);
exports.Font = zod_1.z.record(zod_1.z.object({
    data: zod_1.z.union([zod_1.z.string(), ArrayBufferSchema, Uint8ArraySchema]),
    fallback: zod_1.z.boolean().optional(),
    subset: zod_1.z.boolean().optional(),
}));
exports.BasePdf = zod_1.z.union([zod_1.z.string(), ArrayBufferSchema, Uint8ArraySchema]);
exports.Template = zod_1.z.object({
    schemas: zod_1.z.array(zod_1.z.record(exports.Schema)),
    basePdf: exports.BasePdf,
    sampledata: zod_1.z.array(zod_1.z.record(zod_1.z.string())).length(1).optional(),
    columns: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.Inputs = zod_1.z.array(zod_1.z.record(zod_1.z.string())).min(1);
const CommonOptions = zod_1.z.object({ font: exports.Font.optional() });
exports.CommonProps = zod_1.z.object({
    template: exports.Template,
    options: CommonOptions.optional(),
});
// -------------------generate-------------------
exports.GeneratorOptions = CommonOptions;
exports.GenerateProps = exports.CommonProps.extend({
    inputs: exports.Inputs,
    options: exports.GeneratorOptions.optional(),
}).strict();
exports.SchemaInputs = zod_1.z.record(zod_1.z.string());
// ---------------------------------------------
exports.UIOptions = CommonOptions.extend({ lang: exports.Lang.optional() });
const HTMLElementSchema = zod_1.z.any().refine((v) => v instanceof HTMLElement);
exports.UIProps = exports.CommonProps.extend({
    domContainer: HTMLElementSchema,
    options: exports.UIOptions.optional(),
});
// -----------------Form, Viewer-----------------
exports.PreviewProps = exports.UIProps.extend({ inputs: exports.Inputs }).strict();
exports.PreviewReactProps = exports.PreviewProps.omit({ domContainer: true }).extend({
    onChangeInput: zod_1.z
        .function()
        .args(zod_1.z.object({ index: zod_1.z.number(), value: zod_1.z.string(), key: zod_1.z.string() }))
        .returns(zod_1.z.void())
        .optional(),
    size: exports.Size,
});
// ---------------Designer---------------
exports.DesignerProps = exports.UIProps.extend({}).strict();
exports.DesignerReactProps = exports.DesignerProps.omit({ domContainer: true }).extend({
    onSaveTemplate: zod_1.z.function().args(exports.Template).returns(zod_1.z.void()),
    size: exports.Size,
});
//# sourceMappingURL=schema.js.map
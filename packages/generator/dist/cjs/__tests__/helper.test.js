"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../src/helper");
const jsqr_1 = __importDefault(require("jsqr"));
const pngjs_1 = require("pngjs");
/**
 * 生成したQRコード（png）画像から入力データが正常に読み取れるかをテスト
 */
describe('createBarCode', () => {
    describe('qrcode', () => {
        // テスト名, input, expected
        const tests = [
            ['URL', 'https://www.google.com/', 'https://www.google.com/'],
            ['ひらがな', 'てすとです', 'てすとです'],
            ['ひらがな2', 'あいうえおあいうえお２', 'あいうえおあいうえお２'],
            ['カタカナ', 'テストです', 'テストです'],
            ['漢字', 'お正月', 'お正月'],
            ['中国語', '新年快乐', '新年快乐'],
            ['タイ語', 'สวัสดีปีใหม่', 'สวัสดีปีใหม่'],
        ];
        for (const t of tests) {
            // eslint-disable-next-line no-loop-func
            test(`${t[0]}: ${t[1]}`, () => __awaiter(void 0, void 0, void 0, function* () {
                const buffer = (yield (0, helper_1.createBarCode)({
                    type: 'qrcode',
                    input: t[1],
                    width: 10,
                    height: 10,
                    backgroundColor: '00000000', // 背景色を指定しないとjsQRでうまく解析できない
                }));
                const png = pngjs_1.PNG.sync.read(buffer);
                const pngData = new Uint8ClampedArray(png.data);
                const qr = (0, jsqr_1.default)(pngData, png.width, png.height);
                expect(qr).not.toBeNull();
                const dataBuffer = Buffer.from(qr.binaryData);
                expect(dataBuffer.toString('utf8')).toEqual(t[2]);
            }));
        }
    });
});
//# sourceMappingURL=helper.test.js.map
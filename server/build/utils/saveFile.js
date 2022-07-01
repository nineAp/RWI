"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
function saveFile(image) {
    let fileName = (0, uuid_1.v4)() + '.jpg';
    image.mv(path_1.default.resolve(__dirname, '..', 'static', fileName));
    return fileName;
}
exports.default = saveFile;

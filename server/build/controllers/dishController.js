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
const client_1 = require("@prisma/client");
const runtime_1 = require("@prisma/client/runtime");
const saveFile_1 = __importDefault(require("../utils/saveFile"));
const prisma = new client_1.PrismaClient();
class DishController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dish = yield prisma.dish.findMany({
                    include: { Category: true }
                });
                return res.json(dish);
            }
            catch (e) {
                res.status(500);
                return res.json({ message: 'Unexpected Error', code: '500' });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const dish = yield prisma.dish.findUnique({
                    include: { Category: true },
                    where: {
                        id: Number(id)
                    }
                });
                res.json(dish);
            }
            catch (e) {
                res.status(500);
                if (e instanceof runtime_1.PrismaClientKnownRequestError) {
                    if (e.code === 'P2018') {
                        res.status(404);
                        return res.json({ message: 'Category not found', code: '404' });
                    }
                    return res.json({ message: 'Unexpected Error', code: '500' });
                }
            }
        });
    }
    getByCatId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const dish = yield prisma.dish.findMany({
                    where: {
                        categoryId: Number(id)
                    }
                });
                res.json(dish);
            }
            catch (e) {
                res.status(500);
                if (e instanceof runtime_1.PrismaClientKnownRequestError) {
                    if (e.code === 'P2018') {
                        res.status(404);
                        return res.json({ message: 'Category not found', code: '404' });
                    }
                    return res.json({ message: 'Unexpected Error', code: '500' });
                }
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            console.log(body);
            try {
                const image = req.files;
                console.log(image);
                let fileName;
                if (image !== null) {
                    const { image } = req.files;
                    fileName = (0, saveFile_1.default)(image);
                }
                else {
                    fileName = 'no_photo.jpg';
                }
                let catId = null;
                if (String(body.categoryId) !== '') {
                    catId = Number(body.categoryId);
                }
                const dish = yield prisma.dish.create({
                    data: {
                        title: body.title,
                        image: fileName,
                        description: body.description,
                        weight: body.weight,
                        price: Number(body.price),
                        categoryId: catId
                    }
                });
                return res.json(dish);
            }
            catch (e) {
                res.status(500);
                if (e instanceof runtime_1.PrismaClientKnownRequestError) {
                    if (e.code === 'P2005') {
                        res.status(409);
                        return res.json({ message: 'Не все данные введены или тип данных несоответсвует', code: '409' });
                    }
                    return res.json({ message: 'Unexpected Error', code: '500' });
                }
            }
        });
    }
    change(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const body = req.body;
            try {
                const image = req.files;
                let fileName = 'no_photo.jpg';
                let catId = null;
                if (String(body.categoryId) !== '') {
                    catId = Number(body.categoryId);
                }
                else {
                    const previousValue = yield prisma.dish.findUnique({
                        where: {
                            id: Number(id),
                        }
                    });
                    if (previousValue !== null) {
                        catId = previousValue.categoryId;
                    }
                }
                if (image !== null) {
                    const { image } = req.files;
                    fileName = (0, saveFile_1.default)(image);
                }
                else {
                    const previousValue = yield prisma.dish.findUnique({
                        where: {
                            id: Number(id),
                        }
                    });
                    if (previousValue !== null) {
                        fileName = previousValue.image;
                    }
                }
                const dish = yield prisma.dish.update({
                    where: {
                        id: Number(id)
                    },
                    data: {
                        title: body.title,
                        image: fileName,
                        description: body.description,
                        weight: body.weight,
                        price: Number(body.price),
                        categoryId: catId,
                    }
                });
                return res.json(dish);
            }
            catch (e) {
                res.status(500);
                if (e instanceof runtime_1.PrismaClientKnownRequestError) {
                    if (e.code === 'P2005') {
                        res.status(409);
                        return res.json({ message: 'Тип данных несоответсвует', code: '409' });
                    }
                    return res.json({ message: 'Unexpected Error', code: '500' });
                }
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield prisma.dish.delete({
                    where: {
                        id: Number(id)
                    }
                });
                return res.json({ message: 'Успешно удалено' });
            }
            catch (e) {
                res.status(500);
                return res.json({ message: 'Unexpected Error', code: '500' });
            }
        });
    }
}
exports.default = DishController;
module.exports = DishController;

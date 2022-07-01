"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../controllers/categoryController"));
const router = (0, express_1.Router)();
const categoryController = new categoryController_1.default();
router.get('', categoryController.get);
router.get('/:id', categoryController.getById);
router.post('', categoryController.create);
router.put('/:id', categoryController.change);
router.delete('/:id', categoryController.delete);
module.exports = router;

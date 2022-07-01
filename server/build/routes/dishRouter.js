"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dishController_1 = __importDefault(require("../controllers/dishController"));
const router = (0, express_1.Router)();
const dishController = new dishController_1.default();
router.get('', dishController.get);
router.get('/:id', dishController.getById);
router.get('/catDishes/:id', dishController.getByCatId);
router.post('', dishController.create);
router.put('/:id', dishController.change);
router.delete('/:id', dishController.delete);
module.exports = router;

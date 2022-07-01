"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const categoryRouter = require('./categoryRouter');
const dishRouter = require('./dishRouter');
router.use('/category', categoryRouter);
router.use('/dish', dishRouter);
module.exports = router;

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosRoutes = void 0;
const express_1 = require("express");
const ProductosController_1 = __importStar(require("../controllers/ProductosController"));
const ValidateDTOMiddleware_1 = __importDefault(require("../middleware/ValidateDTOMiddleware"));
const RouterCommon_1 = __importDefault(require("../common/RouterCommon"));
const ProductosDTO_1 = __importDefault(require("../model/dto/ProductosDTO"));
class ProductosRoutes extends RouterCommon_1.default {
    path;
    router;
    controller;
    constructor() {
        super(ProductosController_1.default, ValidateDTOMiddleware_1.default);
        this.path = '/productos';
        this.router = (0, express_1.Router)();
        this.controller = ProductosController_1.productosController;
        this.initRoutes();
    }
    initRoutes() {
        this.router.get(`${this.path}`, this.controller.getProductos);
        this.router.post(`${this.path}`, (req, res, next) => {
            ValidateDTOMiddleware_1.default.validator(req, res, next, ProductosDTO_1.default);
        }, (req, res) => this.controller.createProductos(req, res));
    }
}
exports.productosRoutes = new ProductosRoutes();

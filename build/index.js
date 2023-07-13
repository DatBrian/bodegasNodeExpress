"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const BodegasRoutes_1 = require("./routes/BodegasRoutes");
const ProductosRoutes_1 = require("./routes/ProductosRoutes");
const app = new app_1.default([
    BodegasRoutes_1.bodegasRoutes,
    ProductosRoutes_1.productosRoutes
]);
app.listen();

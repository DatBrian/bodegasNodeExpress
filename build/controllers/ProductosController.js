"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosController = void 0;
const ProductosService_1 = require("../services/ProductosService");
class ProductosController {
    service;
    constructor() {
        this.service = ProductosService_1.productosService;
    }
    getProductos = async (_req, res) => {
        try {
            const productos = await this.service.getProductos();
            res.json(productos);
        }
        catch (error) {
            console.error("Error al obtener los productos", error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las bodegas' });
        }
    };
    createProductos = async (req, res) => {
        try {
            await this.service.createProductos(req.body);
            res.json("Producto insertado correctamente :D");
        }
        catch (error) {
            console.log("Error al crear el producto:", error);
            res.status(500).json({ error: 'Ocurrió un error al crear el producto' });
        }
    };
}
exports.default = ProductosController;
exports.productosController = new ProductosController();

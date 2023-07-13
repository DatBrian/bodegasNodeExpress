"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosService = void 0;
const ProductosRepository_1 = require("../repositories/ProductosRepository");
class ProdcuctosService {
    repository;
    constructor() {
        this.repository = ProductosRepository_1.productosRepository;
    }
    async getProductos() {
        try {
            const productos = await this.repository.getProductos();
            return productos;
        }
        catch (error) {
            console.log("Error en el Servicio :(");
            throw error;
        }
    }
    async createProductos(body) {
        try {
            const newProductos = await this.repository.createProducto(body);
            return newProductos;
        }
        catch (error) {
            console.log("Service error");
            throw error;
        }
    }
}
exports.default = ProdcuctosService;
exports.productosService = new ProdcuctosService();

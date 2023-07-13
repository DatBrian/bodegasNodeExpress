"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodegasController = void 0;
const BodegasService_1 = require("../services/BodegasService");
class BodegasController {
    service;
    constructor() {
        this.service = BodegasService_1.bodegasService;
    }
    getBodegas = async (_req, res) => {
        try {
            const bodegas = await this.service.getBodegas();
            res.json(bodegas);
        }
        catch (error) {
            console.error('Error al obtener las bodegas:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las bodegas' });
        }
    };
    createBodega = async (req, res) => {
        try {
            await this.service.createBodegas(req.body);
            res.json("Bodega insertada correctamente:D");
        }
        catch (error) {
            console.error('Error al crear la bodega:', error);
            res.status(500).json({ error: 'Ocurrió un error al crear la bodega' });
        }
    };
}
exports.default = BodegasController;
exports.bodegasController = new BodegasController();

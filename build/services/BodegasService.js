"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodegasService = void 0;
const BodegasRepository_1 = require("../repositories/BodegasRepository");
class BodegasService {
    repository;
    constructor() {
        this.repository = BodegasRepository_1.bodegasRepository;
    }
    async getBodegas() {
        try {
            const bodegas = await this.repository.getBodegas();
            return bodegas;
        }
        catch (error) {
            throw error;
        }
    }
    async createBodegas(body) {
        try {
            const newBodegas = await this.repository.createBodega(body);
            return newBodegas;
        }
        catch (error) {
            console.log("Service error");
            throw error;
        }
    }
}
exports.default = BodegasService;
exports.bodegasService = new BodegasService();

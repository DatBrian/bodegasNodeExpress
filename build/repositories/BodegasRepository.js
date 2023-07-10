"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodegasRepository = void 0;
const ConnectDataSource_1 = require("../config/ConnectDataSource");
const BodegasEntity_1 = __importDefault(require("../model/entities/BodegasEntity"));
const Connection_1 = require("../db/Connection");
class BodegasRepository extends Connection_1.Connection {
    async getBodegas() {
        const connection = await ConnectDataSource_1.dataSource.getConnection();
        try {
            const connection = await this.connect;
            const query = 'SELECT * FROM bodegas ORDER BY nombre ASC';
            const [rows] = await connection.query(query);
            const bodegas = rows.map((row) => {
                return new BodegasEntity_1.default(row.nombre, row.id_responsable, row.estado, row.created_by, row.update_by);
            });
            return bodegas;
        }
        catch (error) {
            console.error('Error al obtener las bodegas :(', error);
            throw new Error('Error al obtener las bodegas :(');
        }
        finally {
            connection.release();
        }
    }
    async createBodega(body) {
        const connection = await ConnectDataSource_1.dataSource.getConnection();
        try {
            const connection = await this.connect;
            const query = 'INSERT INTO bodegas SET ?';
            await connection.query(query, body);
            return body;
        }
        catch (error) {
            console.error("Error en el repositorio");
            throw error;
        }
        finally {
            connection.release();
        }
    }
}
exports.default = BodegasRepository;
exports.bodegasRepository = new BodegasRepository();

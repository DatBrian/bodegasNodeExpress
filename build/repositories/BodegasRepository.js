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
                const mappedRow = {
                    name: row.nombre,
                    responsable: row.id_responsable,
                    state: row.estado,
                    created: row.created_by,
                    updated: row.update_by,
                    createTime: row.created_at,
                    updateTime: row.updated_at,
                    deleteTime: row.deleted_at
                };
                return new BodegasEntity_1.default(mappedRow.name, mappedRow.responsable, mappedRow.state, mappedRow.created, mappedRow.updated, mappedRow.createTime, mappedRow.updateTime, mappedRow.deleteTime);
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
            const connect = await this.connect;
            const query = 'INSERT INTO bodegas SET ?';
            await connect.query(query, {
                nombre: body.name,
                id_responsable: body.responsable,
                estado: body.state,
                created_by: body.created,
                update_by: body.updated,
                created_at: body.createTime,
                updated_at: body.updateTime,
                deleted_at: body.deleteTime
            });
            return body;
        }
        catch (error) {
            console.error("Error en el repositorio", error);
            throw error;
        }
        finally {
            connection.release();
        }
    }
}
exports.default = BodegasRepository;
exports.bodegasRepository = new BodegasRepository();

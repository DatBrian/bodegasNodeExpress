"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosRepository = void 0;
const ConnectDataSource_1 = require("../config/ConnectDataSource");
const Connection_1 = require("../db/Connection");
class ProductosRepository extends Connection_1.Connection {
    async getProductos() {
        const connection = await ConnectDataSource_1.dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = `SELECT p.id, p.nombre AS name, p.descripcion AS description, p.estado AS state, SUM(i.cantidad) AS total
                FROM productos p
                JOIN inventarios i ON p.id = i.id_producto
                GROUP BY p.id, p.nombre, p.descripcion, p.estado
                ORDER BY total DESC;`;
            const [rows] = await connect.query(query);
            const productos = rows.map((row) => {
                return {
                    name: row.name,
                    description: row.description,
                    state: row.state,
                    total: row.total,
                };
            });
            return productos;
        }
        catch (error) {
            console.error('Error al obtener los productos :(', error);
            throw new Error('Error al obtener los productos :(');
        }
        finally {
            connection.release();
        }
    }
    async createProducto(body) {
        const connection = await ConnectDataSource_1.dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query = 'INSERT INTO productos SET ?';
            await connect.query(query, {
                nombre: body.name,
                descripcion: body.des,
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
            console.log("Error en el repositorio", error);
            throw error;
        }
        finally {
            connection.release();
        }
    }
}
exports.default = ProductosRepository;
exports.productosRepository = new ProductosRepository();

import { RowDataPacket } from "mysql2";
import { dataSource } from "../config/ConnectDataSource";
import { Connection } from "../db/Connection";
import ProductosEntity from "../model/entities/ProductosEntity";

class ProductosRepository extends Connection {

    public async getProductos(): Promise<any[]> {
        const connection = await dataSource.getConnection();
        try {
            const connect = await this.connect;
            const query =
                `SELECT p.id, p.nombre AS name, p.descripcion AS description, p.estado AS state, SUM(i.cantidad) AS total
                FROM productos p
                JOIN inventarios i ON p.id = i.id_producto
                GROUP BY p.id, p.nombre, p.descripcion, p.estado
                ORDER BY total DESC;`
            const [rows] = await connect.query<RowDataPacket[]>(query);

            const productos: any[] = rows.map((row) => {
                return {
                    name: row.name,
                    description: row.description,
                    state: row.state,
                    total: row.total,
                };
            });
            return productos;
        } catch (error) {
            console.error('Error al obtener los productos :(', error);
            throw new Error('Error al obtener los productos :(');
        } finally {
            connection.release();
        }
    }

    public async createProducto(body: ProductosEntity): Promise<ProductosEntity>{
        const connection = await dataSource.getConnection();
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
        } catch (error) {
            console.log("Error en el repositorio", error);
            throw error;
        } finally {
            connection.release();
        }

    }
}
export default ProductosRepository;
export const productosRepository = new ProductosRepository();
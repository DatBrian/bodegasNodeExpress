import { RowDataPacket } from "mysql2/promise";
import { dataSource } from "../config/ConnectDataSource";
import BodegasEntity from "../model/entities/BodegasEntity";
import { Connection } from "../db/Connection";

class BodegasRepository extends Connection {

    public async getBodegas(): Promise<BodegasEntity[]> {
        const connection = await dataSource.getConnection();
        try {
            const connection = await this.connect;
            const query = 'SELECT * FROM bodegas ORDER BY nombre ASC';
            const [rows] = await connection.query<RowDataPacket[]>(query);

            const bodegas: BodegasEntity[] = rows.map((row) => {
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

                return new BodegasEntity(
                    mappedRow.name,
                    mappedRow.responsable,
                    mappedRow.state,
                    mappedRow.created,
                    mappedRow.updated,
                    mappedRow.createTime,
                    mappedRow.updateTime,
                    mappedRow.deleteTime
                );
            });

            return bodegas;
        } catch (error) {
            console.error('Error al obtener las bodegas :(', error);
            throw new Error('Error al obtener las bodegas :(');
        } finally {
            connection.release();
        }
    }

    public async createBodega(body: BodegasEntity): Promise<BodegasEntity> {
        const connection = await dataSource.getConnection();
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
        } catch (error) {
            console.error("Error en el repositorio", error);
            throw error
        } finally {
            connection.release();
        }
    }
}
export default BodegasRepository;
export const bodegasRepository = new BodegasRepository();
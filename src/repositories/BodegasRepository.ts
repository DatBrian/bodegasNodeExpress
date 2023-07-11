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
                return new BodegasEntity(
                    row.nombre,
                    row.id_responsable,
                    row.estado,
                    row.created_by,
                    row.update_by,
                    row.created_at,
                    row.updated_at,
                    row.deleted_at
                )
            })

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
            const connection = await this.connect;
            const query = 'INSERT INTO bodegas SET ?';
            await connection.query(query, {
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
import { Request, Response } from "express";
import BodegasService, {bodegasService} from "../services/BodegasService";

class BodegasController {
    private readonly service: BodegasService;

    constructor() {
        this.service = bodegasService;
    }

    public getBodegas = async (_req: Request, res: Response) => {
        try {
            const bodegas = await this.service.getBodegas();
            res.json(bodegas);
        } catch (error) {
            console.error('Error al obtener las bodegas:', error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las bodegas' });
        }
    }

    public createBodega = async (req: Request, res: Response) => {
        try {
            await this.service.createBodegas(req.body);
            res.json("Bodega insertada correctamente:D");
        } catch (error) {
            console.error('Error al crear la bodega:', req.body);
            res.status(500).json({ error: 'Ocurrió un error al crear la bodega' });
        }
    }
}

export default BodegasController;
export const bodegasController = new BodegasController();
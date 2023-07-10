// import { Connection } from "../db/Connection";
import BodegasDTO from "../model/dto/BodegasDTO";
import BodegasEntity from "../model/entities/BodegasEntity";
import BodegasRepository, { bodegasRepository } from "../repositories/BodegasRepository";

class BodegasService {
    private repository: BodegasRepository

    constructor() {
        this.repository = bodegasRepository;
    }

    public async getBodegas(): Promise<BodegasEntity[]> {
        try {
            const bodegas = await this.repository.getBodegas();
            return bodegas;
        } catch (error) {
            throw error;
        }
    }

    public async createBodegas(body: BodegasDTO): Promise<BodegasEntity> {
        try {
            const newBodegas = await this.repository.createBodega(body);
            return newBodegas;
        } catch (error) {
            console.log("Service error");
            throw error;
        }
    }
}

export default BodegasService;
export const bodegasService = new BodegasService();
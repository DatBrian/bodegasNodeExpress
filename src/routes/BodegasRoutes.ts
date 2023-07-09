import { Router } from "express";
import BodegasController, { bodegasController } from "../controllers/BodegasController";
import ValidateMiddlewareDTO from "../middleware/ValidateDTOMiddleware";
import RouterCommon from "../common/RouterCommon";

class BodegasRoutes  extends RouterCommon<BodegasController, ValidateMiddlewareDTO>{
    public path: string;
    public router: Router;
    public controller: BodegasController;

    constructor() {
        super(BodegasController, ValidateMiddlewareDTO);
        this.path = '/bodegas';
        this.router = Router();
        this.controller = bodegasController
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get(`${this.path}`, this.controller.getBodegas)
    }
}

export default BodegasRoutes;
export const bodeagasRoutes = new BodegasRoutes();
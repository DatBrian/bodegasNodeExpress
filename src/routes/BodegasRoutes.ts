import { Router } from "express";
import BodegasController, { bodegasController } from "../controllers/BodegasController";
import ValidateMiddlewareDTO from "../middleware/ValidateDTOMiddleware";
import RouterCommon from "../common/RouterCommon";
import BodegasDTO from "../model/dto/BodegasDTO";

class BodegasRoutes extends RouterCommon<BodegasController, ValidateMiddlewareDTO>{
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

        this.router.post(
            `${this.path}`,
            (req, res, next) => ValidateMiddlewareDTO.validator(req, res, next, BodegasDTO),
            (req, res) => this.controller.createBodega(req, res)
        );
    }
}

export default BodegasRoutes;
export const bodeagasRoutes = new BodegasRoutes();
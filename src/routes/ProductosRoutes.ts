import { Router } from "express";
import ProductosController, { productosController } from "../controllers/ProductosController";
import ValidateMiddlewareDTO from "../middleware/ValidateDTOMiddleware";
import RouterCommon from "../common/RouterCommon";
import ProductosDTO from "../model/dto/ProductosDTO";

class ProductosRoutes extends RouterCommon<ProductosController, ValidateMiddlewareDTO>{
    public path: string;
    public router: Router;
    public controller: ProductosController;

    constructor() {
        super(ProductosController, ValidateMiddlewareDTO);
        this.path = '/productos';
        this.router = Router();
        this.controller = productosController;
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get(`${this.path}`, this.controller.getProductos);

        this.router.post(
            `${this.path}`,
            (req, res, next) => {
                ValidateMiddlewareDTO.validator(req, res, next, ProductosDTO);
            },
            (req, res) => this.controller.createProductos(req, res)
        );
    }
}
export const productosRoutes = new ProductosRoutes();
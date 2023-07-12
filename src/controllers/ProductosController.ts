import { Request, Response } from "express";
import ProdcuctosService, { productosService } from "../services/ProductosService";

class ProductosController{
    private readonly service: ProdcuctosService;

    constructor() {
        this.service = productosService;
    }

    public getProductos = async (_req: Request, res: Response) => {
        try {
            const productos = await this.service.getProductos();
            res.json(productos);
        } catch (error) {
            console.error("Error al obtener los productos", error);
            res.status(500).json({ error: 'Ocurrió un error al obtener las bodegas' });
        }
    }

    public createProductos = async (req: Request, res: Response) => {
        try {
            await this.service.createProductos(req.body);
            res.json("Producto insertado correctamente :D");
        } catch (error) {
            console.log("Error al crear el producto:", error);
            res.status(500).json({error: 'Ocurrió un error al crear el producto'})
        }
    }
}
export default ProductosController;
export const productosController = new ProductosController();
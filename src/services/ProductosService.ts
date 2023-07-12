import ProductosDTO from "../model/dto/ProductosDTO";
import ProductosEntity from "../model/entities/ProductosEntity";
import ProductosRepository, { productosRepository } from "../repositories/ProductosRepository";

class ProdcuctosService {
    private repository: ProductosRepository

    constructor() {
        this.repository = productosRepository;
    }

    public async getProductos(): Promise<ProductosEntity[]> {
        try {
            const productos = await this.repository.getProductos();
            return productos;
        } catch (error) {
            console.log("Error en el Servicio :(");
            throw error;
        }
    }

    public async createProductos(body: ProductosDTO): Promise<ProductosEntity> {
        try {
            const newProductos = await this.repository.createProducto(body);
            return newProductos;
        } catch (error) {
            console.log("Service error");
            throw error;
        }
    }
}
export default ProdcuctosService;
export const productosService = new ProdcuctosService();
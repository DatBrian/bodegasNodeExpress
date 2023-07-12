import App from './app';
import { bodegasRoutes } from './routes/BodegasRoutes';
import { productosRoutes } from './routes/ProductosRoutes';

const app = new App([
    bodegasRoutes,
    productosRoutes
]);

app.listen();
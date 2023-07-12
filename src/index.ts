import App from './app';
import { bodegasRoutes } from './routes/BodegasRoutes';
import { productosRoutes } from './routes/ProductosRoutes';
// import env from './config/EnvConfig';

const app = new App([
    bodegasRoutes,
    productosRoutes
]);

// app.use(express.json());

app.listen();
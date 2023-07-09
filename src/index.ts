import App from './app';
import BodegasRoutes from './routes/BodegasRoutes';
// import env from './config/EnvConfig';

const app = new App([new BodegasRoutes()]);

// app.use(express.json());

app.listen();
import express, { Application } from "express";
import routemap from "express-routemap";
import { Routes } from "./interfaces/RoutesInterface";
import env from "./config/EnvConfig";
import chalk from "chalk";

class App {

    public app: Application;
    public port: number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.port = Number(env.PORT) || 5000;
        this.initRoutes(routes);
    }

    public initRoutes(routes: Routes[]) {
        routes.forEach((route) => {
            this.app.use(`/api/${env.API_VERSION}`, route.router)
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log();
            console.log(chalk.bgCyan.white.bold('🗺️  Rutas disponibles: 🚴 '));
            routemap(this.app);
            console.log(chalk.bgGreen.black('✨ Servidor en línea ✨'));
            console.log(chalk.blue('------------------------------------------------------------------------'));
            console.log(chalk.green.bold(`🚀 ¡El servidor se ha levantado exitosamente en http://${env.HOST}:${env.PORT}!`));
            console.log(chalk.blue('------------------------------------------------------------------------'));
        });
    }
}
export default App;
import { Routes } from "./interfaces/RoutesInterface";
import dotenv from 'dotenv';

dotenv.config();

class App {

    public app: Express.Application;
    public env: string;
    public port: number | string;

    constructor(routes: Routes[]) {
        this.port = process.env.PORT;
    }
}
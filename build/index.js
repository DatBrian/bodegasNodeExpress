"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const BodegasRoutes_1 = __importDefault(require("./routes/BodegasRoutes"));
// import env from './config/EnvConfig';
const app = new app_1.default([new BodegasRoutes_1.default()]);
// app.use(express.json());
app.listen();

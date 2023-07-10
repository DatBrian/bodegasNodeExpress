"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BodegasEntity {
    nombre;
    id_responsable;
    estado;
    created_by;
    update_by;
    constructor(nombre, id_responsable, estado, created_by, update_by) {
        this.nombre = nombre;
        this.id_responsable = id_responsable;
        this.estado = estado;
        this.created_by = created_by;
        this.update_by = update_by;
    }
}
exports.default = BodegasEntity;

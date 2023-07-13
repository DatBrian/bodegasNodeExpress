"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BodegasEntity {
    name;
    responsable;
    state;
    created;
    updated;
    createTime;
    updateTime;
    deleteTime;
    constructor(name, responsable, state, created, updated, createTime, updateTime, deleteTime) {
        this.name = name;
        this.responsable = responsable;
        this.state = state;
        this.created = created;
        this.updated = updated;
        this.createTime = createTime;
        this.updateTime = updateTime;
        this.deleteTime = deleteTime;
    }
}
exports.default = BodegasEntity;

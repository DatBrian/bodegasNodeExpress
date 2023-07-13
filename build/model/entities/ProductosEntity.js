"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BodegasEntity {
    name;
    des;
    state;
    created;
    updated;
    createTime;
    updateTime;
    deleteTime;
    constructor(name, des, state, created, updated, createTime, updateTime, deleteTime) {
        this.name = name;
        this.des = des;
        this.state = state;
        this.created = created;
        this.updated = updated;
        this.createTime = createTime;
        this.updateTime = updateTime;
        this.deleteTime = deleteTime;
    }
}
exports.default = BodegasEntity;

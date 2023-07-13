"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const FunctionsCommon_1 = require("../../common/FunctionsCommon");
class ProductosDTO {
    name;
    des;
    state;
    created;
    updated;
    createTime;
    updateTime;
    deleteTime;
    constructor(nombre, description, estado, created_by, update_by, created_at, updated_at, deleted_at) {
        this.name = nombre;
        this.des = description;
        this.state = estado;
        this.created = created_by;
        this.updated = update_by;
        this.createTime = created_at;
        this.updateTime = updated_at;
        this.deleteTime = deleted_at;
    }
}
__decorate([
    (0, class_transformer_1.Expose)({ name: 'name' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], ProductosDTO.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'des' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], ProductosDTO.prototype, "des", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'state' }),
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", Number)
], ProductosDTO.prototype, "state", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'created' }),
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", BigInt)
], ProductosDTO.prototype, "created", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'updated' }),
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value), { toClassOnly: true }),
    __metadata("design:type", BigInt)
], ProductosDTO.prototype, "updated", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'createTime' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.ValidateIf)((_, value) => !value),
    (0, class_transformer_1.Transform)(({ value }) => (0, FunctionsCommon_1.formatDate)(value), { toClassOnly: true }),
    __metadata("design:type", String)
], ProductosDTO.prototype, "createTime", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'updateTime' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.ValidateIf)((_, value) => !value),
    (0, class_transformer_1.Transform)(({ value }) => (0, FunctionsCommon_1.formatDate)(value), { toClassOnly: true }),
    __metadata("design:type", String)
], ProductosDTO.prototype, "updateTime", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'deleteTime' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], ProductosDTO.prototype, "deleteTime", void 0);
exports.default = ProductosDTO;

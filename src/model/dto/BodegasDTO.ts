import { Expose, Type, Transform } from 'class-transformer';
import { IsString, IsInt, IsDateString, ValidateIf, IsOptional } from 'class-validator';
import 'reflect-metadata';
import { formatDate } from '../../common/FunctionsCommon';

class BodegasDTO {
    @Expose({ name: 'name' })
    @IsString()
    @Type(() => String)
    name: string;

    @Expose({ name: 'responsable' })
    @IsInt()
    @Transform(({ value }) =>
        parseInt(value), { toClassOnly: true })
    responsable: bigint;

    @Expose({ name: 'state' })
    @IsInt()
    @Transform(({ value }) =>
        parseInt(value), { toClassOnly: true })
    state: bigint;

    @Expose({ name: 'created' })
    @IsInt()
    @Transform(({ value }) =>
        parseInt(value), { toClassOnly: true })
    created: bigint;

    @Expose({ name: 'updated' })
    @IsInt()
    @Transform(({ value }) =>
        parseInt(value), { toClassOnly: true })
    updated: bigint;

    @Expose({ name: 'createTime' })
    @IsDateString()
    @ValidateIf((_, value) => !value)
    @Transform(({ value }) => formatDate(value), { toClassOnly: true })
    createTime: string;

    @Expose({ name: 'updateTime' })
    @IsDateString()
    @ValidateIf((_, value) => !value)
    @Transform(({ value }) => formatDate(value), { toClassOnly: true })
    updateTime: string;


    @Expose({ name: 'deleteTime' })
    @IsOptional()
    @IsString()
    @Type(() => String)
    deleteTime: string;

    constructor(
        nombre: string,
        id_responsable: bigint,
        estado: bigint,
        created_by: bigint,
        update_by: bigint,
        created_at: string,
        updated_at: string,
        deleted_at: string
    ) {
        this.name = nombre;
        this.responsable = id_responsable;
        this.state = estado;
        this.created = created_by;
        this.updated = update_by;
        this.createTime = created_at;
        this.updateTime = updated_at;
        this.deleteTime = deleted_at;
    }
}

export default BodegasDTO;
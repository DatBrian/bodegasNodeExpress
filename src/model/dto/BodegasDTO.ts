    import { Expose, Type, Transform } from 'class-transformer';
import { IsString, IsInt, IsDate } from 'class-validator';
import 'reflect-metadata';
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

    // @Expose({ name: 'createTime' })
    // @IsDate()
    // @Transform(({ value }) =>)

    constructor(
        nombre: string,
        id_responsable: bigint,
        estado: bigint,
        created_by: bigint,
        update_by: bigint,
        created_at: Date,
        updated_at: Date,
        deleted_at: Date,
    ) {
        this.name = nombre;
        this.responsable = id_responsable;
        this.state = estado;
        this.created = created_by;
        this.updated = update_by;
        this.createTime = created_at;
        this.createdTime = updated_at;
        this.deletedTime = deleted_at;
    }
}

export default BodegasDTO;
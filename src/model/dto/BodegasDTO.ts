import { Expose, Type, Transform } from 'class-transformer';

class BodegasDTO {

    @Expose({ name: "name" })
    @Type(() => String)
    name: string;

    @Expose({ name: "responsable" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    responsable: bigint;

    @Expose({ name: "state" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    state: bigint;

    @Expose({ name: "created" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    created: bigint;

    @Expose({ name: "updated" })
    @Transform(({ value }) => parseInt(value), { toClassOnly: true })
    updated: bigint;

    constructor(
        public nombre: string,
        public id_responsable: bigint,
        public estado: bigint,
        public created_by: bigint,
        public update_by: bigint
    ) {
        this.name = nombre;
        this.responsable = id_responsable;
        this.state = estado;
        this.created = created_by;
        this.updated = update_by;
     }

}
export default BodegasDTO;

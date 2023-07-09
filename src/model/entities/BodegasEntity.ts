class BodegasEntity{
    constructor(
        public id: bigint,
        public nombre: string,
        public id_responsable: bigint,
        public estado: number,
        public created_by: bigint,
        public update_by: bigint,
        public created_at: Date,
        public updated_at: Date,
        public deleted_at: Date
    ){}
}

export default BodegasEntity;
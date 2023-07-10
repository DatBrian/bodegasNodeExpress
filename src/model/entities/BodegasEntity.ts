class BodegasEntity{
    constructor(
        public nombre: string,
        public id_responsable: bigint,
        public estado: number,
        public created_by: bigint,
        public update_by: bigint
    ){}
}

export default BodegasEntity;
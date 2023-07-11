class BodegasEntity {
    constructor(
        public name: string,
        public responsable: bigint,
        public state: bigint,
        public created: bigint,
        public updated: bigint,
        public createTime: Date,
        public updateTime: Date,
        public deleteTime: Date
    ) { }
}

export default BodegasEntity;
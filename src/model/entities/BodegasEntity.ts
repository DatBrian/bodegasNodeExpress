class BodegasEntity {
    constructor(
        public name: string,
        public responsable: bigint,
        public state: bigint,
        public created: bigint,
        public updated: bigint,
        public createTime: string,
        public updateTime: string,
        public deleteTime: string
    ) { }
}

export default BodegasEntity;
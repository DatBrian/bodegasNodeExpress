class BodegasEntity {
    constructor(
        public name: string,
        public des: string,
        public state: number,
        public created: bigint,
        public updated: bigint,
        public createTime: string,
        public updateTime: string,
        public deleteTime: string
    ) { }
}

export default BodegasEntity;
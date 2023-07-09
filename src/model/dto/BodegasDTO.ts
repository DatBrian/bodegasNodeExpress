import { IsInt, IsString, IsNotEmpty, IsOptional, IsDate } from 'class-validator';

class BodegasDTO {
    @IsInt()
    public id!: string;

    @IsString()
    @IsNotEmpty()
    public nombre!: string;

    @IsInt()
    @IsNotEmpty()
    public estado!: string;

    @IsInt()
    @IsOptional()
    public createdBy!: number;

    @IsInt()
    @IsOptional()
    public update_by!: number;

    @IsDate()
    @IsOptional()
    public created_at!: Date;

    @IsDate()
    @IsOptional()
    public updated_at!: Date;

    @IsDate()
    @IsOptional()
    public deleted_AT!: Date;

    constructor(partial: Partial<BodegasDTO>) {
        Object.assign(this, partial);
    }

}
export default BodegasDTO;

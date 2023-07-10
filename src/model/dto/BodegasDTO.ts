import { IsInt, IsString, IsNotEmpty, IsOptional } from 'class-validator';

class BodegasDTO {

    @IsString()
    @IsNotEmpty()
    public nombre!: string;

    @IsInt()
    @IsNotEmpty()
    public id_responsable!: bigint;

    @IsInt()
    @IsNotEmpty()
    public estado!: number;

    @IsInt()
    @IsOptional()
    public created_by!: bigint;

    @IsInt()
    @IsOptional()
    public update_by!: bigint;

}
export default BodegasDTO;

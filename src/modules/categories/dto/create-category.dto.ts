import { IsString, Length } from "class-validator";

export class CreateCategoryDto {

    @IsString()
    @Length(2, 30)
    name: string;
}
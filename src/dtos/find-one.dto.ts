import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class FindOneDto {
  @IsNotEmpty()
  @IsUUID('4')
  id: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  relations?: string[];

  @IsOptional()
  @IsBoolean()
  with_deleted?: string;
}

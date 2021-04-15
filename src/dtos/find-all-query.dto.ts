import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class FindAllQueryDto {
  @IsOptional()
  @IsUUID('4')
  id?: string;

  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  ids?: string[];
  
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  page?: number;

  @IsOptional()
  @IsString()
  per_page?: number;

  @IsOptional()
  @IsString()
  order_by?: string;

  @IsOptional()
  @IsString()
  sorted_by?: string;

  @IsOptional()
  @IsString()
  using?: string;

  @IsOptional()
  @IsString({ each: true })
  relations?: string[];

  @IsOptional()
  @IsString()
  with_deleted?: string;
}

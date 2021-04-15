import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class FindOneQueryDto {
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

import { IsEmail, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateFeedbackDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsString()
  message: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsInt()
  productId: number;
}

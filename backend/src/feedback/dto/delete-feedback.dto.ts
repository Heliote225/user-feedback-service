import { IsArray, ArrayNotEmpty, IsInt } from 'class-validator';

export class DeleteFeedbackDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  ids: number[];
}
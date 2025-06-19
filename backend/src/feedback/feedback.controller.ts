import {
  Controller, Post, Body, Get, Query, Delete,
} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { DeleteFeedbackDto } from './dto/delete-feedback.dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  create(@Body() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackService.create(createFeedbackDto);
  }

  @Get()
  findAll(@Query() query: any) {
    return this.feedbackService.findAll(query);
  }

  @Delete()
  deleteMany(@Body() deleteFeedbackDto: DeleteFeedbackDto) {
    return this.feedbackService.deleteMany(deleteFeedbackDto);
  }
}
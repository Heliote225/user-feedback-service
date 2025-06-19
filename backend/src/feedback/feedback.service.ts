import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { DeleteFeedbackDto } from './dto/delete-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateFeedbackDto) {
    return this.prisma.feedback.create({ data });
  }

  async findAll(query: any) {
    const {
      page = 1,
      limit = 10,
      sort = 'desc',
      rating,
      product_id,
      email,
    } = query;

    const where: any = {};
    if (rating) where.rating = +rating;
    if (product_id) where.productId = +product_id;
    if (email) where.email = email;

    return this.prisma.feedback.findMany({
      where,
      orderBy: { createdAt: sort.toLowerCase() === 'asc' ? 'asc' : 'desc' },
      skip: (+page - 1) * +limit,
      take: +limit,
    });
  }

  findOne(id: number) {
    return this.prisma.feedback.findUnique({ where: { id } });
  }

  deleteMany({ ids }: DeleteFeedbackDto) {
    return this.prisma.feedback.deleteMany({
      where: {
        id: { in: ids },
      },
    });
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [ProductModule, FeedbackModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

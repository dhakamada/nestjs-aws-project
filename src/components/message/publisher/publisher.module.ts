import { Module } from '@nestjs/common';
import { AwsSnsModule } from '../../aws-sns/aws-sns.module';
import { PublisherService as PublisherService } from './publisher.service';

@Module({
  imports: [AwsSnsModule],
  providers: [PublisherService],
  exports: [PublisherService],
})
export class PublisherModule {}

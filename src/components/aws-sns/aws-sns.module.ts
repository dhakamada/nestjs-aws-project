import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AwsSnsService } from './aws-sns.service';

@Module({
  imports: [ConfigModule],
  providers: [AwsSnsService],
  exports: [AwsSnsService],
})
export class AwsSnsModule {}

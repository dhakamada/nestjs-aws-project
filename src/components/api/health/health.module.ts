import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthController } from './health.controller';
import { PublisherModule } from 'src/components/notification/publisher/publisher.module';

@Module({
  providers: [HealthService],
  controllers: [HealthController],
  imports: [PublisherModule],
})
export class HealthModule {}

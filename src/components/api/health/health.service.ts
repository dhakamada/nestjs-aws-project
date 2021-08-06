import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PublisherService } from 'src/components/publisher/publisher.service';

@Injectable()
export class HealthService {
  constructor(
    private readonly publisherService: PublisherService,
    private readonly configService: ConfigService,
  ) {
    this.publisherService.config({
      topicArn: this.configService.get('aws.sns.topicExample'),
    });
  }

  check(): string {
    const message = `Message publish ${Math.floor(Math.random() * 100000)}`;
    this.publisherService.publish(message);
    return message;
  }
}

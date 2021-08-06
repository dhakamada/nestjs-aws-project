import { Injectable } from '@nestjs/common';
import { AwsSnsService } from '../../aws-sns/aws-sns.service';

@Injectable()
export class PublisherService {
  constructor(private readonly providerService: AwsSnsService) {}

  config(params) {
    this.providerService.config(params);
  }

  async publish(message: any): Promise<void> {
    this.providerService.publish(message);
  }
}

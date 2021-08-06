import { Injectable } from '@nestjs/common';
import IMessageProvider from '../message/publisher/interfaces/message-provider.interface';
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

type AwsConfig = {
  topicArn: string;
};

@Injectable()
export class AwsSnsService implements IMessageProvider {
  private readonly snsEndpoint: string;
  private readonly region: string;
  private topicArn: string;

  constructor(private configService: ConfigService) {
    this.snsEndpoint = this.configService.get('aws.sns.endpoint');
    this.region = this.configService.get('aws.region');
  }

  config(params: AwsConfig): void {
    this.topicArn = params.topicArn;
  }

  async publish(message: any): Promise<void> {
    try {
      const publishParams = {
        Message: message,
        TopicArn: this.topicArn,
      };

      const data = await new AWS.SNS({
        endpoint: this.snsEndpoint,
      })
        .publish(publishParams)
        .promise();
      console.log('MessageID is ', data.MessageId);
    } catch (err) {
      console.error(err, err.stack);
    }
  }
}

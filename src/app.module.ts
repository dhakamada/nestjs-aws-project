import { Module } from '@nestjs/common';

import { PublisherModule } from './components/message/publisher/publisher.module';
import { HealthModule } from './components/api/health/health.module';
import { AwsSnsModule } from './components/aws-sns/aws-sns.module';
import { ConfigModule } from '@nestjs/config';
import awsConfig from './config/aws.config';

const getEnv = (): string => {
  const ENV = process.env.NODE_ENV || 'dev';
  const envFile = `./env/.env.${ENV.toLowerCase()}`;
  return envFile;
};

@Module({
  imports: [
    PublisherModule,
    HealthModule,
    AwsSnsModule,
    ConfigModule.forRoot({
      envFilePath: getEnv(),
      isGlobal: true,
      load: [awsConfig],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

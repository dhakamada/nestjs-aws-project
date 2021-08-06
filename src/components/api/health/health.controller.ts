import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private health: HealthService) {}

  @Get()
  check(): string {
    return this.health.check();
  }
}

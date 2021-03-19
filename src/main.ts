import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {urlencoded,json} from 'express';
import * as bodyParser from "body-parser";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

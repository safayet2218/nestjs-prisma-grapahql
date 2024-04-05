import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './libs/prisma/prisma.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3001);
}
bootstrap();

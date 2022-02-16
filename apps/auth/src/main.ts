/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';

  app.useGlobalPipes(new ValidationPipe())

  app.enableVersioning({
    type: VersioningType.URI
  })
  
  const config = new DocumentBuilder()
  .setTitle("Nest API")
  .setDescription("the description of the API")
  .setVersion("1.0")
  .build()

  const document = SwaggerModule.createDocument(app,config)

  SwaggerModule.setup("/", app, document)

  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();

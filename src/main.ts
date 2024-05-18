import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('GSES BTC application')
    .setDescription('GSES BTC application API description')
    .setVersion('1.0')
    .addTag('rate', 'Отримання поточного курсу USD до UAH')
    .addTag('subscription', 'Робота з підпискою')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(process.env.BACKEND_PORT);
}
bootstrap();

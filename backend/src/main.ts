import helmet from 'helmet';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const configService = app.get<ConfigService>(ConfigService);

  app.enableCors({
    origin: configService.get<string>('CORS_ORIGIN').split(','),
  });
  app.use(helmet());
  app.use(compression());
  app.use(bodyParser.json());

  app.setGlobalPrefix('api');

  const swagerConfig = new DocumentBuilder()
    .setTitle('Staycation')
    .setDescription('Staycation api documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swagerConfig);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(configService.get<number>('PORT', 3000));
  logger.verbose(`App is started in ${await app.getUrl()}/api/docs`);
}
bootstrap();

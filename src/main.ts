import { AppModule } from './domain/app/module/app.module';
import { NestFactory } from '@nestjs/core';

import * as dotenv from 'dotenv';
import { HttpExceptionFilter } from './domain/global/filter/http-exception-filter';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';

function initSwagger(app: INestApplication): void {
    const swaggerConfig = new DocumentBuilder()
        .setTitle('Tester Endpoint')
        .setDescription('An endpoint server for practicing RESTful APIs')
        .setVersion('0.1.1')
        .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api/docs', app, document);
}

dotenv.config();
async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    const logger = new Logger();
    app.setGlobalPrefix(process.env.APP_API_PREFIX);
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalPipes(new ValidationPipe());
    initSwagger(app);
    logger.log(
        `Listening on port ${process.env.APP_PORT}.`,
        process.env.APP_NAME,
    );
    await app.listen(process.env.APP_PORT);
}
bootstrap();

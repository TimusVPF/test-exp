import { AppModule } from './domain/app/module/app.module';
import { NestFactory } from '@nestjs/core';

import * as dotenv from 'dotenv';
import { HttpExceptionFilter } from './domain/global/filter/http-exception-filter';

dotenv.config();
async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix(process.env.APP_API_PREFIX);
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(process.env.APP_PORT);
}
bootstrap();

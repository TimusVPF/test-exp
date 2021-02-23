import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { error } from 'src/domain/global/utils/output-encoder';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    public catch(exception: HttpException, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();

        response.status(status).json(
            error({
                message: exception.message,
                path: request.url,
                statusCode: status,
                timestamp: new Date().toISOString(),
            }),
        );
    }
}

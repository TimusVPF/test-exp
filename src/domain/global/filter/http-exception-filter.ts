import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { error } from 'src/domain/global/utils/output-encoder';

@Catch(Error)
export class HttpExceptionFilter implements ExceptionFilter {
    public catch(exception: Error, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        if (exception instanceof HttpException) {
            const status = exception.getStatus();

            response.status(status).json(
                error({
                    error: exception.getResponse(),
                    path: request.url,
                    timestamp: new Date().toISOString(),
                }),
            );
        } else {
            response.status(500).json(
                error({
                    error: {
                        error: 'Internal Server Error',
                        message: 'Internal Server Error',
                        statusCode: 500,
                    },
                    path: request.url,
                    timestamp: new Date().toISOString(),
                }),
            );
        }
    }
}

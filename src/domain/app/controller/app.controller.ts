import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { JSONOutput } from 'src/domain/global/utils/output-encoder';

@Controller()
export class AppController {
    public constructor(private readonly appService: AppService) {
        // Do nothing.
    }

    @Get()
    public getHello(): JSONOutput<any> {
        return this.appService.getHello();
    }
}

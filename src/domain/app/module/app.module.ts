import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { Module } from '@nestjs/common';

@Module({
    controllers: [AppController],
    imports: [],
    providers: [AppService],
})
export class AppModule {}

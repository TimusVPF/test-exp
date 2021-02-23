import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { Module } from '@nestjs/common';

import { AuthModule } from 'src/domain/auth/module/auth.module';

@Module({
    controllers: [AppController],
    imports: [AuthModule],
    providers: [AppService],
})
export class AppModule {}

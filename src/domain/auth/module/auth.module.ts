import { RegisterController } from '../controller/register.controller';
import { RegisterService } from '../service/register.service';

import { Module } from '@nestjs/common';

@Module({
    controllers: [RegisterController],
    imports: [],
    providers: [RegisterService],
})
export class AuthModule {}

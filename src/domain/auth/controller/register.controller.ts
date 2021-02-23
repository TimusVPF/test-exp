import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from '../service/register.service';

import { RegisterForm } from '../form/register.form';

import { JSONOutput, data } from 'src/domain/global/utils/output-encoder';

@Controller()
export class RegisterController {
    public constructor(private readonly registerService: RegisterService) {}

    @Post('/register')
    public register(@Body() registerForm: RegisterForm): JSONOutput<any> {
        const updatedForm = this.registerService.register(registerForm);
        return data({
            value: updatedForm,
        });
    }
}

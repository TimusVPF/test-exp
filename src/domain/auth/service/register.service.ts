import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterForm } from '../form/register.form';

import { without } from 'src/domain/global/utils/cloner';

@Injectable()
export class RegisterService {
    private registeredUsers: Map<string, RegisterForm>;

    public constructor() {
        // Initialize RegisterService
        this.registeredUsers = new Map();
    }

    public register(registerForm: RegisterForm): RegisterForm {
        if (this.registeredUsers.has(registerForm.email)) {
            throw new ConflictException(
                `User with email ${registerForm.email} exists!`,
            );
        }
        this.registeredUsers.set(registerForm.email, registerForm);
        return without(registerForm, 'password');
    }
}

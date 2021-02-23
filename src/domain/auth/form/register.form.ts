import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import {
    IsAlphanumeric,
    IsEmail,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';

export class RegisterForm {
    @ApiProperty({
        description:
            'The title of the registrant. Must either be "Mr." or "Mrs."',
        example: 'Mr.',
        name: 'title',
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    @Matches(/^(Mr\.|Ms\.|Mrs\.)$/)
    public title: string;

    @ApiProperty({
        description: 'The first name of the registrant',
        example: 'Angelina',
        name: 'first_name',
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    @Expose({ name: 'first_name' })
    public firstName: string;

    @ApiProperty({
        description: 'The last name of the registrant',
        example: 'Ajimu',
        name: 'last_name',
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    @Expose({ name: 'last_name' })
    public lastName: string;

    @ApiProperty({
        description: 'The requested password for registration',
        example: 'SafePassword',
        minLength: 6,
        name: 'password',
        required: true,
    })
    @IsNotEmpty()
    @MinLength(6)
    @IsAlphanumeric()
    public password: string;

    @ApiProperty({
        description:
            'The registration email. This is used as identification for logging in.',
        example: 'someone@gmail.com',
        name: 'email',
        required: true,
    })
    @IsEmail()
    public email: string;

    @ApiProperty({
        description: 'The primary address of the registrant.',
        example: '453 Cherry Ridge Drive',
        name: 'address',
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    public address: string;

    @ApiProperty({
        description: 'A secondary address line for the registrant.',
        example: '453 Cherry Ridge Drive',
        name: 'second_address',
        required: false,
    })
    @Expose({ name: 'second_address' })
    public secondAddress: string;

    @ApiProperty({
        description: 'A tertiary address line for the registrant.',
        example: '453 Cherry Ridge Drive',
        name: 'third_address',
        required: false,
    })
    @Expose({ name: 'third_address' })
    public thirdAddress: string;

    public constructor(
        firstName: string,
        lastName: string,
        password: string,
        email: string,
        address: string,
        secondAddress: string,
        thirdAddress: string,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.address = address;
        this.secondAddress = secondAddress;
        this.thirdAddress = thirdAddress;
    }

    public get fullName(): string {
        return `${this.firstName} ${this.lastName}`.trim();
    }

    public get fullAddress(): string {
        return `${this.address} ${this.secondAddress || ''} ${
            this.thirdAddress || ''
        }`.trim();
    }
}

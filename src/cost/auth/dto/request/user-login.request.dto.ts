import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator'; 

export class UserLoginRequestDto {
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;


    @IsNotEmpty()
    @MinLength(5)
    @ApiProperty()
    password: string;
}
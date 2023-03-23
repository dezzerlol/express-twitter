import {IsString, Length, MinLength} from "class-validator";

export class AuthDto {
    @IsString()
    @Length(3,20, {message: "Username must be between 3 and 20 characters"})
    username: string

    @IsString()
    @Length(6, 30, {message: "Password must be between 6 and 30 characters"})
    password: string
}

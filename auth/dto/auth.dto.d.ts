export declare class AuthLoginDto {
    email: string;
    password: string;
}
export declare class AuthRegisterDto extends AuthLoginDto {
    userName: string;
    name?: string;
}

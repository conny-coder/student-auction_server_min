import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export interface UserModel extends Base {
}
export declare class UserModel extends TimeStamps {
    userName: string;
    email: string;
    password: string;
    avatar: string;
    balance: number;
    isAdmin: boolean;
    rating: number;
    name: string;
}

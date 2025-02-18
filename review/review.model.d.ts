import { Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { UserModel } from 'src/user/user.model';
export interface ReviewModel extends Base {
}
export declare class ReviewModel extends TimeStamps {
    userId: Ref<UserModel>;
    authorId: Ref<UserModel>;
    rating: number;
    comment: string;
}

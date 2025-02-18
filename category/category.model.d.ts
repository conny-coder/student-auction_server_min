import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export interface CategoryModel extends Base {
}
export declare class CategoryModel extends TimeStamps {
    name: string;
    slug: string;
}

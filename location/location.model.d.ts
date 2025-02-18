import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export interface LocationModel extends Base {
}
export declare class LocationModel extends TimeStamps {
    city: string;
    region: string;
}

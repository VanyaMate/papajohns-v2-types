import { Describe, object, string } from 'superstruct';


export type _FoodMark = {
    id: string;
    text: string;
    color: string;
}

export const DomainFoodMark: Describe<_FoodMark> = object({
    id   : string(),
    text : string(),
    color: string(),
});
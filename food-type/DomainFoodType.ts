import { Describe, object, string } from 'superstruct';


export type _FoodType = {
    id: string;
    title: string;
    icon: string;
}

export const DomainFoodType: Describe<_FoodType> = object({
    id   : string(),
    title: string(),
    icon : string(),
});
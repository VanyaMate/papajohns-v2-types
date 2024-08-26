import {
    Infer,
    number,
    object,
    optional,
    partial,
    pick,
    string,
} from 'superstruct';
import { IsFoodType } from '../type/IsFoodType';


export const IsFoodNutritional = object({
    id   : string(),
    title: string(),
    value: number(),
    type : optional(IsFoodType),
});

export const IsFoodNutritionalCreateData = object({
    title : string(),
    value : number(),
    typeId: string(),
});
export const IsFoodNutritionalUpdateData = partial(object({
    title: string(),
    value: number(),
}));

export type _FoodNutritional = Infer<typeof IsFoodNutritional>;
export type _FoodNutritionalCreateData = Infer<typeof IsFoodNutritionalCreateData>;
export type _FoodNutritionalUpdateData = Infer<typeof IsFoodNutritionalUpdateData>;
import {
    array,
    Infer,
    object,
    optional,
    partial,
    pick,
    string,
} from 'superstruct';
import { IsFood } from '../food/IsFood';
import { IsFoodNutritional } from '../nutritional/IsFoodNutritional';


export const IsFoodType = object({
    id         : string(),
    image      : string(),
    price      : string(),
    food       : optional(IsFood),
    nutritional: optional(array(IsFoodNutritional)),
});

export const IsFoodTypeCreateData = pick(IsFoodType, [ 'image', 'price' ]);
export const IsFoodTypeUpdateData = pick(partial(IsFoodType), [ 'image', 'price' ]);

export type _FoodType = Infer<typeof IsFoodType>;
export type _FoodTypeCreateData = Infer<typeof IsFoodTypeCreateData>;
export type _FoodTypeUpdateData = Infer<typeof IsFoodTypeUpdateData>;
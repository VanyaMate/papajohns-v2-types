import {
    array,
    Infer,
    object,
    optional,
    partial,
    pick,
    string,
} from 'superstruct';
import { IsFoodCategory } from '../category/IsFoodCategory';


export const IsFood = object({
    id         : string(),
    title      : string(),
    description: string(),
    types      : optional(array()),
    marks      : optional(array()),
    categories : optional(array(IsFoodCategory)),
});

export const IsFoodCreateData = pick(IsFood, [ 'title', 'description' ]);
export const IsFoodUpdateData = pick(partial(IsFood), [ 'title', 'description' ]);

export type _Food = Infer<typeof IsFood>;
export type _FoodCreateData = Infer<typeof IsFoodCreateData>;
export type _FoodUpdateData = Infer<typeof IsFoodUpdateData>;
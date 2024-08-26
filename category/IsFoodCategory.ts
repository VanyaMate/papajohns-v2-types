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


export const IsFoodCategory = object({
    id   : string(),
    title: string(),
    icon : string(),
    color: string(),
    foods: optional(array(IsFood)),
});

export const IsFoodCategoryCreateData = pick(IsFoodCategory, [ 'title', 'icon', 'color' ]);
export const IsFoodCategoryUpdateData = pick(partial(IsFoodCategory), [ 'title', 'icon', 'color' ]);

export type _FoodCategory = Infer<typeof IsFoodCategory>;
export type _FoodCategoryCreateData = Infer<typeof IsFoodCategoryCreateData>;
export type _FoodCategoryUpdateData = Infer<typeof IsFoodCategoryUpdateData>;
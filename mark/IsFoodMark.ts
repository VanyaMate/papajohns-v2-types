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


export const IsFoodMark = object({
    id   : string(),
    title: string(),
    color: string(),
    icon : string(),
    foods: optional(array(IsFood)),
});

export const IsFoodMarkCreateData = pick(IsFoodMark, [ 'title', 'color', 'icon' ]);
export const IsFoodMarkUpdateData = pick(partial(IsFoodMark), [ 'title', 'color', 'icon' ]);

export type _FoodMark = Infer<typeof IsFoodMark>;
export type _FoodMarkCreateData = Infer<typeof IsFoodMarkCreateData>;
export type _FoodMarkUpdateData = Infer<typeof IsFoodMarkUpdateData>;
import {
    array, Infer,
    number,
    object,
    optional,
    partial,
    pick,
    string,
} from 'superstruct';
import { IsFoodType } from '../type/IsFoodType';
import { IsFoodAdditional } from '../additional/IsFoodAdditional';


export const IsFoodSize = object({
    id        : string(),
    title     : string(),
    multiplier: number(),
    person    : number(),
    adminTitle: optional(string()),
    types     : optional(array(IsFoodType)),
    additional: optional(array(IsFoodAdditional)),
});

export const IsFoodSizeCreateData = pick(IsFoodSize, [ 'title', 'multiplier', 'person', 'adminTitle' ]);
export const IsFoodSizeUpdateData = pick(partial(IsFoodSize), [ 'title', 'multiplier', 'person', 'adminTitle' ]);

export type _FoodSize = Infer<typeof IsFoodSize>;
export type _FoodSizeCreateData = Infer<typeof IsFoodSizeCreateData>;
export type _FoodSizeUpdateData = Infer<typeof IsFoodSizeUpdateData>;
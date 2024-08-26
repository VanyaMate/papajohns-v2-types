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
import { IsFoodSize } from '../size/IsFoodSize';


export const IsFoodAdditional = object({
    id         : string(),
    image      : string(),
    title      : string(),
    description: string(),
    price      : number(),
    types      : optional(array(IsFoodType)),
    sizes      : optional(array(IsFoodSize)),
});

export const IsFoodAdditionalCreateData = pick(IsFoodAdditional, [ 'image', 'title', 'description', 'price' ]);
export const IsFoodAdditionalUpdateData = pick(partial(IsFoodAdditional), [ 'image', 'title', 'description', 'price' ]);

export type _FoodAdditional = Infer<typeof IsFoodAdditional>;
export type _FoodAdditionalCreateData = Infer<typeof IsFoodAdditionalCreateData>;
export type _FoodAdditionalUpdateData = Infer<typeof IsFoodAdditionalUpdateData>;
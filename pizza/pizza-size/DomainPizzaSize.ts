import {
    DomainPizzaAdditional,
} from '../pizza-additional/DomainPizzaAdditional';
import {
    array,
    Infer,
    number,
    object,
    partial,
    pick,
    string,
} from 'superstruct';


export const DomainPizzaSize = object({
    id        : string(),
    size      : string(),
    multiplier: number(),
    additional: array(DomainPizzaAdditional),
});

export const DomainPizzaSizeCreateData = pick(DomainPizzaSize, [ 'size', 'multiplier', 'additional' ]);
export const DomainPizzaSizeUpdateData = pick(partial(DomainPizzaSize), [ 'size', 'multiplier', 'additional' ]);

export type _PizzaSize = Infer<typeof DomainPizzaSize>;
export type _PizzaSizeCreateData = Infer<typeof DomainPizzaSizeCreateData>;
export type _PizzaSizeUpdateData = Infer<typeof DomainPizzaSizeUpdateData>;
import { DomainPizzaSize } from '../pizza-size/DomainPizzaSize';
import {
    array,
    Infer,
    number,
    object,
    partial,
    pick,
    string,
} from 'superstruct';


export const DomainPizzaDough = object({
    id   : string(),
    title: string(),
    price: number(),
    sizes: array(DomainPizzaSize),
});

export const DomainPizzaDoughCreateData = pick(DomainPizzaDough, [ 'title', 'price' ]);
export const DomainPizzaDoughUpdateData = pick(partial(DomainPizzaDough), [ 'title', 'price' ]);

export type _PizzaDough = Infer<typeof DomainPizzaDough>;
export type _PizzaDoughCreateData = Infer<typeof DomainPizzaDoughCreateData>;
export type _PizzaDoughUpdateData = Infer<typeof DomainPizzaDoughUpdateData>;
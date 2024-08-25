import { _PizzaSize, DomainPizzaSize } from '../pizza-size/DomainPizzaSize';
import { array, Describe, number, object, string } from 'superstruct';


export type _PizzaDough = {
    id: string;
    title: string;
    price: number;
    sizes: _PizzaSize[];
}

export const DomainPizzaDough: Describe<_PizzaDough> = object({
    id   : string(),
    title: string(),
    price: number(),
    sizes: array(DomainPizzaSize),
});
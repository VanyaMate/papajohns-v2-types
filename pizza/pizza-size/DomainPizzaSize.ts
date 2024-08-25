import {
    _PizzaAdditional,
    DomainPizzaAdditional,
} from '../pizza-additional/DomainPizzaAdditional';
import { array, Describe, number, object, string } from 'superstruct';


export type _PizzaSize = {
    id: string,
    size: number,
    multiplier: number;
    additional: _PizzaAdditional[];
}

export const DomainPizzaSize: Describe<_PizzaSize> = object({
    id        : string(),
    size      : number(),
    multiplier: number(),
    additional: array(DomainPizzaAdditional),
});
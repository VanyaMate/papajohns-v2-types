import { DomainFoodMark } from '../food-mark/DomainFoodMark';
import { DomainPizzaDough } from './pizza-dough/DomainPizzaDough';
import {
    DomainPizzaAdditional,
} from './pizza-additional/DomainPizzaAdditional';
import {
    DomainFoodNutritionalValue,
} from '../food-nutritional-value/DomainFoodNutritionalValue';
import {
    array,
    Infer,
    number,
    object,
    partial,
    pick,
    string,
} from 'superstruct';


export const DomainPizza = object({
    id              : string(),
    title           : string(),
    description     : string(),
    person          : number(),
    price           : number(),
    mark            : DomainFoodMark,
    dough           : array(DomainPizzaDough),
    additional      : array(DomainPizzaAdditional),
    nutritionalValue: array(DomainFoodNutritionalValue),
});

export const DomainPizzaCreateData = pick(DomainPizza, [ 'title', 'description', 'person', 'price' ]);
export const DomainPizzaUpdateData = pick(partial(DomainPizza), [ 'title', 'description', 'person', 'price' ]);

export type _Pizza = Infer<typeof DomainPizza>;
export type _PizzaCreateData = Infer<typeof DomainPizzaCreateData>;
export type _PizzaUpdateData = Infer<typeof DomainPizzaUpdateData>;
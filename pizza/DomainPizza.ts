import { DomainFoodMark } from '../food-mark/DomainFoodMark';
import { DomainPizzaDough } from './pizza-dough/DomainPizzaDough';
import {
    DomainPizzaAdditional,
} from './pizza-additional/DomainPizzaAdditional';
import {
    DomainNutritionalValue,
} from '../food-nutritional-value/DomainNutritionalValue';
import { array, Infer, number, object, string } from 'superstruct';


export const DomainPizza = object({
    id              : string(),
    title           : string(),
    description     : string(),
    person          : number(),
    mark            : DomainFoodMark,
    dough           : array(DomainPizzaDough),
    additional      : array(DomainPizzaAdditional),
    nutritionalValue: array(DomainNutritionalValue),
    price           : number(),
});

export type _Pizza = Infer<typeof DomainPizza>;
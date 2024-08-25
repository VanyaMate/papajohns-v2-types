import { _FoodMark, DomainFoodMark } from '../food-mark/DomainFoodMark';
import { _PizzaDough, DomainPizzaDough } from './pizza-dough/DomainPizzaDough';
import {
    _PizzaAdditional,
    DomainPizzaAdditional,
} from './pizza-additional/DomainPizzaAdditional';
import {
    _NutritionalValue, DomainNutritionalValue,
} from '../food-nutritional-value/DomainNutritionalValue';
import { array, Describe, number, object, string } from 'superstruct';


export type _Pizza = {
    id: string;
    title: string;
    description: string;
    person: number;
    mark: _FoodMark;
    dough: _PizzaDough[];
    additional: _PizzaAdditional[];
    nutritionalValue: _NutritionalValue[];
    price: number;
}

export const DomainPizza: Describe<_Pizza> = object({
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
import {
    Infer,
    number,
    object,
    partial,
    pick,
    string,
} from 'superstruct';


export const DomainFoodNutritionalValue = object({
    id   : string(),
    title: string(),
    value: number(),
});

export const DomainFoodNutritionalValueCreateData = pick(DomainFoodNutritionalValue, [ 'title', 'value' ]);
export const DomainFoodNutritionalValueUpdateData = pick(partial(DomainFoodNutritionalValue), [ 'title', 'value' ]);

export type _FoodNutritionalValue = Infer<typeof DomainFoodNutritionalValue>;
export type _FoodNutritionalValueCreateData = Infer<typeof DomainFoodNutritionalValueCreateData>;
export type _FoodNutritionalValueUpdateData = Infer<typeof DomainFoodNutritionalValueUpdateData>;
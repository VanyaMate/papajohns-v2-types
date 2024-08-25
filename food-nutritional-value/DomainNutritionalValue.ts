import { Describe, number, object, string } from 'superstruct';


export type _NutritionalValue = {
    id: string;
    title: string;
    value: number;
}

export const DomainNutritionalValue: Describe<_NutritionalValue> = object({
    id   : string(),
    title: string(),
    value: number(),
});
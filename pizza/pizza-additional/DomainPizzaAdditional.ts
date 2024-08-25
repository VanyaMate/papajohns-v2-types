import { Describe, number, object, string } from 'superstruct';


export type _PizzaAdditional = {
    id: string;
    title: string;
    icon: string;
    price: number;
}

export const DomainPizzaAdditional: Describe<_PizzaAdditional> = object({
    id   : string(),
    title: string(),
    icon : string(),
    price: number(),
});
import {
    Describe,
    Infer,
    number,
    object,
    partial,
    pick,
    string,
} from 'superstruct';


export const DomainPizzaAdditional = object({
    id   : string(),
    title: string(),
    icon : string(),
    price: number(),
});

export const DomainPizzaAdditionalCreateData = pick(DomainPizzaAdditional, [ 'title', 'price', 'icon' ]);
export const DomainPizzaAdditionalUpdateData = pick(partial(DomainPizzaAdditional), [ 'title', 'price', 'icon' ]);

export type _PizzaAdditional = Infer<typeof DomainPizzaAdditional>;
export type _PizzaAdditionalCreateData = Infer<typeof DomainPizzaAdditionalCreateData>;
export type _PizzaAdditionalUpdateData = Infer<typeof DomainPizzaAdditionalUpdateData>;
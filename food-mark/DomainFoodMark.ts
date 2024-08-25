import { Infer, object, partial, pick, string } from 'superstruct';


export const DomainFoodMark = object({
    id   : string(),
    text : string(),
    color: string(),
});

export const DomainFoodMarkCreateData = pick(DomainFoodMark, [ 'text', 'color' ]);
export const DomainFoodMarkUpdateData = pick(partial(DomainFoodMark), [ 'text', 'color' ]);

export type _FoodMark = Infer<typeof DomainFoodMark>;
export type _FoodMarkCreateData = Infer<typeof DomainFoodMarkCreateData>;
export type _FoodMarkUpdateData = Infer<typeof DomainFoodMarkUpdateData>;
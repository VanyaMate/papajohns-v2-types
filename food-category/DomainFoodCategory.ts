import { Infer, object, partial, pick, string } from 'superstruct';


export const DomainFoodCategory = object({
    id   : string(),
    title: string(),
    icon : string(),
});

export const DomainFoodCategoryCreateData = pick(DomainFoodCategory, [ 'title', 'icon' ]);
export const DomainFoodCategoryUpdateData = pick(partial(DomainFoodCategory), [ 'title', 'icon' ]);

export type _FoodCategory = Infer<typeof DomainFoodCategory>;
export type _FoodCategoryCreateData = Infer<typeof DomainFoodCategoryCreateData>;
export type _FoodCategoryUpdateData = Infer<typeof DomainFoodCategoryUpdateData>;
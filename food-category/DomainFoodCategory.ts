import { Infer, object, string } from 'superstruct';


export const DomainFoodCategory = object({
    id   : string(),
    title: string(),
    icon : string(),
});

export type _FoodCategory = Infer<typeof DomainFoodCategory>;
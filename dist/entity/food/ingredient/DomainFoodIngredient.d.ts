import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export declare enum DomainFoodIngredientPostfix {
    GRAMME = "gramme",
    EACH = "each",
    MILLILITER = "milliliter"
}
export type DomainFoodIngredient = {
    id: string;
    title: string;
    image: string;
    price: number;
    amount: number;
    postfix: DomainFoodIngredientPostfix;
};
export declare const isDomainFoodIngredient: TypeGuard<DomainFoodIngredient>;
export declare const assertDomainFoodIngredient: TypeAssert<DomainFoodIngredient>;

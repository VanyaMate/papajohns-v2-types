import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodIngredientPostfix } from './DomainFoodIngredient';
export type DomainFoodIngredientCreateData = {
    title: string;
    image: string;
    price: number;
    amount: number;
    postfix: DomainFoodIngredientPostfix;
};
export declare const isDomainFoodIngredientCreateData: TypeGuard<DomainFoodIngredientCreateData>;
export declare const assertDomainFoodIngredientCreateData: TypeAssert<DomainFoodIngredientCreateData>;

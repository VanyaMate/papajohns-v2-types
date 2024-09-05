import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodIngredientPostfix } from './DomainFoodIngredient';
import { DomainCategoryType } from '../../common/category/DomainCategory';
export type DomainFoodIngredientUpdateData = {
    title?: string;
    image?: string;
    price?: number;
    amount?: number;
    postfix?: DomainFoodIngredientPostfix;
    categoryType?: Array<DomainCategoryType>;
};
export declare const isDomainFoodIngredientUpdateData: TypeGuard<DomainFoodIngredientUpdateData>;
export declare const assertDomainFoodIngredientUpdateData: TypeAssert<DomainFoodIngredientUpdateData>;

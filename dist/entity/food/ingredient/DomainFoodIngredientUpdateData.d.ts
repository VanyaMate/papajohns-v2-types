import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodIngredientPostfix } from './DomainFoodIngredient';
import { DomainFoodCategoryType } from '../../common/category/DomainCategory';
export type DomainFoodIngredientUpdateData = {
    title?: string;
    image?: string;
    price?: number;
    amount?: number;
    postfix?: DomainFoodIngredientPostfix;
    categoryType?: Array<DomainFoodCategoryType>;
};
export declare const isDomainFoodIngredientUpdateData: TypeGuard<DomainFoodIngredientUpdateData>;
export declare const assertDomainFoodIngredientUpdateData: TypeAssert<DomainFoodIngredientUpdateData>;

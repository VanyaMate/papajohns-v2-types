import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isOptional, isNumber, isArray,
} from '@vanyamate/types-kit';
import { DomainFoodIngredientPostfix } from './DomainFoodIngredient';
import { DomainCategoryType } from '../../common/category/DomainCategory';


export type DomainFoodIngredientUpdateData = {
    title?: string;
    image?: string;
    price?: number;
    amount?: number;
    postfix?: DomainFoodIngredientPostfix;
    categoryType?: Array<DomainCategoryType>;
}

export const isDomainFoodIngredientUpdateData: TypeGuard<DomainFoodIngredientUpdateData> = function (data): data is DomainFoodIngredientUpdateData {
    return !(
        !isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['postfix'], isString) ||
        !isOptional(data['price'], isNumber) ||
        !isOptional(data['amount'], isNumber)
    );
};

export const assertDomainFoodIngredientUpdateData: TypeAssert<DomainFoodIngredientUpdateData> = function (data, errorMessage) {
    if (!isDomainFoodIngredientUpdateData(data)) {
        throw errorMessage(data);
    }
};
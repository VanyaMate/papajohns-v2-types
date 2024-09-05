import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber, isArray,
} from '@vanyamate/types-kit';
import { DomainCategoryType } from '../../common/category/DomainCategory';


export enum DomainFoodIngredientPostfix {
    GRAMME     = 'gramme',
    EACH       = 'each',
    MILLILITER = 'milliliter'
}

export type DomainFoodIngredient = {
    id: string;
    title: string;
    image: string;
    price: number;
    amount: number;
    postfix: DomainFoodIngredientPostfix;
}

export const isDomainFoodIngredient: TypeGuard<DomainFoodIngredient> = function (data): data is DomainFoodIngredient {
    return !(
        !isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isString(data['postfix']) ||
        !isNumber(data['price']) ||
        !isNumber(data['amount'])
    );
};

export const assertDomainFoodIngredient: TypeAssert<DomainFoodIngredient> = function (data, errorMessage) {
    if (!isDomainFoodIngredient(data)) {
        throw errorMessage(data);
    }
};
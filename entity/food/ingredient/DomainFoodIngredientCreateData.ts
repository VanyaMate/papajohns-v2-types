import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber, isArray,
} from '@vanyamate/types-kit';
import { DomainFoodIngredientPostfix } from './DomainFoodIngredient';


export type DomainFoodIngredientCreateData = {
    title: string;
    image: string;
    price: number;
    amount: number;
    postfix: DomainFoodIngredientPostfix;
}

export const isDomainFoodIngredientCreateData: TypeGuard<DomainFoodIngredientCreateData> = function (data): data is DomainFoodIngredientCreateData {
    return !(
        !isObject(data) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isString(data['postfix']) ||
        !isArray(data['categoryType'], isString) ||
        !isNumber(data['price']) ||
        !isNumber(data['amount'])
    );
};

export const assertDomainFoodIngredientCreateData: TypeAssert<DomainFoodIngredientCreateData> = function (data, errorMessage) {
    if (!isDomainFoodIngredientCreateData(data)) {
        throw errorMessage(data);
    }
};
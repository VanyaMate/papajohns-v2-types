import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainLinkFoodIngredientToFood = {
    amount: number;
}

export const isDomainLinkFoodIngredientToFood: TypeGuard<DomainLinkFoodIngredientToFood> = function (data): data is DomainLinkFoodIngredientToFood {
    return !(
        !isObject(data) ||
        !isString(data['field'])
    );
};

export const assertDomainLinkFoodIngredientToFood: TypeAssert<DomainLinkFoodIngredientToFood> = function (data, errorMessage) {
    if (!isDomainLinkFoodIngredientToFood(data)) {
        throw errorMessage(data);
    }
};
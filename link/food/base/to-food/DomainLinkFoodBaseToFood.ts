import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainLinkFoodBaseToFood = {
    baseId: string;
    foodId: string;
}

export const isDomainLinkFoodBaseToFood: TypeGuard<DomainLinkFoodBaseToFood> = function (data): data is DomainLinkFoodBaseToFood {
    return !(
        !isObject(data) ||
        !isString(data['baseId']) ||
        !isString(data['foodId'])
    );
};

export const assertDomainLinkFoodBaseToFood: TypeAssert<DomainLinkFoodBaseToFood> = function (data, errorMessage) {
    if (!isDomainLinkFoodBaseToFood(data)) {
        throw errorMessage(data);
    }
};
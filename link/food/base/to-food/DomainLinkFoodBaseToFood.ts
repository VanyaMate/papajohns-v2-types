import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainLinkFoodBaseToFood = {
    image: string
}

export const isDomainLinkFoodBaseToFood: TypeGuard<DomainLinkFoodBaseToFood> = function (data): data is DomainLinkFoodBaseToFood {
    return !(
        !isObject(data) ||
        !isString(data['image'])
    );
};

export const assertDomainLinkFoodBaseToFood: TypeAssert<DomainLinkFoodBaseToFood> = function (data, errorMessage) {
    if (!isDomainLinkFoodBaseToFood(data)) {
        throw errorMessage(data);
    }
};
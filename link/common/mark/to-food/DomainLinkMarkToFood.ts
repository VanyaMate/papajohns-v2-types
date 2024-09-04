import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainLinkMarkToFood = {
    foodId: string;
    markId: string;
}

export const isDomainLinkMarkToFood: TypeGuard<DomainLinkMarkToFood> = function (data): data is DomainLinkMarkToFood {
    return !(
        !isObject(data) ||
        !isString(data['foodId']) ||
        !isString(data['markId'])
    );
};

export const assertDomainLinkMarkToFood: TypeAssert<DomainLinkMarkToFood> = function (data, errorMessage) {
    if (!isDomainLinkMarkToFood(data)) {
        throw errorMessage(data);
    }
};
import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainFoodCategory = {
    id: string;
    title: string;
    image: string;
}

export const isDomainFoodCategory: TypeGuard<DomainFoodCategory> = function (data): data is DomainFoodCategory {
    return !(
        !isObject(data) ||
        !isString(data['field'])
    );
};

export const assertDomainFoodCategory: TypeAssert<DomainFoodCategory> = function (data, errorMessage) {
    if (!isDomainFoodCategory(data)) {
        throw errorMessage(data);
    }
};
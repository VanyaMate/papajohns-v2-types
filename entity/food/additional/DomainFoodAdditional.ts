import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';


export type DomainFoodAdditional = {
    id: string;
    title: string;
    image: string;
    price: number;
}

export const isDomainFoodAdditional: TypeGuard<DomainFoodAdditional> = function (data): data is DomainFoodAdditional {
    return !(
        !isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isNumber(data['price'])
    );
};

export const assertDomainFoodAdditional: TypeAssert<DomainFoodAdditional> = function (data, errorMessage) {
    if (!isDomainFoodAdditional(data)) {
        throw errorMessage(data);
    }
};
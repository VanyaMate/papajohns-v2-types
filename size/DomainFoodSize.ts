import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';


export type DomainFoodSize = {
    id: string;
    title: string;
    multiplier: number;
    person: number;
}

export const isDomainFoodSize: TypeGuard<DomainFoodSize> = function (data): data is DomainFoodSize {
    return !(
        !isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isNumber(data['multiplier']) ||
        !isNumber(data['person'])
    );
};

export const assertDomainFoodSize: TypeAssert<DomainFoodSize> = function (data, errorMessage) {
    if (!isDomainFoodSize(data)) {
        throw errorMessage(data);
    }
};
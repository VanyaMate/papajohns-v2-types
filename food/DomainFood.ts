import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainFood = {
    id: string;
    title: string;
    description: string;
}

export const isDomainFood: TypeGuard<DomainFood> = function (data): data is DomainFood {
    return !(
        !isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isString(data['description'])
    );
};

export const assertDomainFood: TypeAssert<DomainFood> = function (data, errorMessage) {
    if (!isDomainFood(data)) {
        throw errorMessage(data);
    }
};
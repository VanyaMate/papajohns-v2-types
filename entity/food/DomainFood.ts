import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainFood = {
    id: string;
    title: string;
    image: string;
    description: string;
}

export const isDomainFood: TypeGuard<DomainFood> = function (data): data is DomainFood {
    return !(
        !isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isString(data['description'])
    );
};

export const assertDomainFood: TypeAssert<DomainFood> = function (data, errorMessage) {
    if (!isDomainFood(data)) {
        throw errorMessage(data);
    }
};
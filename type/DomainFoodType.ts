import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainFoodType = {
    id: string;
    title: string;
    image: string;
    price: string;
}

export const isDomainFoodType: TypeGuard<DomainFoodType> = function (data): data is DomainFoodType {
    return !(
        !isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isString(data['price'])
    );
};

export const assertDomainFoodType: TypeAssert<DomainFoodType> = function (data, errorMessage) {
    if (!isDomainFoodType(data)) {
        throw errorMessage(data);
    }
};
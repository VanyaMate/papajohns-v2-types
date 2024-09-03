import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainFoodTypeCreateData = {
    title: string;
    image: string;
    price: string;
}

export const isDomainFoodTypeCreateData: TypeGuard<DomainFoodTypeCreateData> = function (data): data is DomainFoodTypeCreateData {
    return !(
        !isObject(data) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isString(data['price'])
    );
};

export const assertDomainFoodTypeCreateData: TypeAssert<DomainFoodTypeCreateData> = function (data, errorMessage) {
    if (!isDomainFoodTypeCreateData(data)) {
        throw errorMessage(data);
    }
};
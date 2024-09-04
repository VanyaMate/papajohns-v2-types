import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isOptional,
} from '@vanyamate/types-kit';


export type DomainFoodUpdateData = {
    title?: string;
    image?: string;
    description?: string;
}

export const isDomainFoodUpdateData: TypeGuard<DomainFoodUpdateData> = function (data): data is DomainFoodUpdateData {
    return !(
        !isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['description'], isString)
    );
};

export const assertDomainFoodUpdateData: TypeAssert<DomainFoodUpdateData> = function (data, errorMessage) {
    if (!isDomainFoodUpdateData(data)) {
        throw errorMessage(data);
    }
};
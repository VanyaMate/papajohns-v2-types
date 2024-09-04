import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isOptional, isNumber,
} from '@vanyamate/types-kit';


export type DomainFoodSizeUpdateData = {
    title?: string;
    image?: string;
    multiplier?: number;
    baseId?: string;
}

export const isDomainFoodSizeUpdateData: TypeGuard<DomainFoodSizeUpdateData> = function (data): data is DomainFoodSizeUpdateData {
    return !(
        !isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['baseId'], isString) ||
        !isOptional(data['multiplier'], isNumber)
    );
};

export const assertDomainFoodSizeUpdateData: TypeAssert<DomainFoodSizeUpdateData> = function (data, errorMessage) {
    if (!isDomainFoodSizeUpdateData(data)) {
        throw errorMessage(data);
    }
};
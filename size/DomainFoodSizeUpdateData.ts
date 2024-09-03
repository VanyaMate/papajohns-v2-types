import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainFoodSizeUpdateData = {
    title?: string;
    multiplier?: number;
    person?: number;
}

export const isDomainFoodSizeUpdateData: TypeGuard<DomainFoodSizeUpdateData> = function (data): data is DomainFoodSizeUpdateData {
    return !(
        !isObject(data) ||
        !isString(data['field'])
    );
};

export const assertDomainFoodSizeUpdateData: TypeAssert<DomainFoodSizeUpdateData> = function (data, errorMessage) {
    if (!isDomainFoodSizeUpdateData(data)) {
        throw errorMessage(data);
    }
};
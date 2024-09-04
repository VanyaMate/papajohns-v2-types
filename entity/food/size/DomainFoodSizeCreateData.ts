import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';


export type DomainFoodSizeCreateData = {
    title: string;
    image: string;
    multiplier: number;
    baseId: string;
}

export const isDomainFoodSizeCreateData: TypeGuard<DomainFoodSizeCreateData> = function (data): data is DomainFoodSizeCreateData {
    return !(
        !isObject(data) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isNumber(data['multiplier']) ||
        !isString(data['baseId'])
    );
};

export const assertDomainFoodSizeCreateData: TypeAssert<DomainFoodSizeCreateData> = function (data, errorMessage) {
    if (!isDomainFoodSizeCreateData(data)) {
        throw errorMessage(data);
    }
};
import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';


export type DomainFoodSizeCreateData = {
    title: string;
    multiplier: number;
    person: number;
}

export const isDomainFoodSizeCreateData: TypeGuard<DomainFoodSizeCreateData> = function (data): data is DomainFoodSizeCreateData {
    return !(
        !isObject(data) ||
        !isString(data['title']) ||
        !isNumber(data['multiplier']) ||
        !isNumber(data['person'])
    );
};

export const assertDomainFoodSizeCreateData: TypeAssert<DomainFoodSizeCreateData> = function (data, errorMessage) {
    if (!isDomainFoodSizeCreateData(data)) {
        throw errorMessage(data);
    }
};
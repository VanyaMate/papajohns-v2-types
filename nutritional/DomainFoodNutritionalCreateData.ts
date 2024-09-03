import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';


export type DomainFoodNutritionalCreateData = {
    title: string;
    value: number;
}

export const isDomainFoodNutritionalCreateData: TypeGuard<DomainFoodNutritionalCreateData> = function (data): data is DomainFoodNutritionalCreateData {
    return !(
        !isObject(data) ||
        !isString(data['title']) ||
        !isNumber(data['value'])
    );
};

export const assertDomainFoodNutritionalCreateData: TypeAssert<DomainFoodNutritionalCreateData> = function (data, errorMessage) {
    if (!isDomainFoodNutritionalCreateData(data)) {
        throw errorMessage(data);
    }
};
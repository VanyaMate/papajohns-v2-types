import {
    TypeGuard,
    TypeAssert,
    isObject,
    isOptional, isString, isNumber,
} from '@vanyamate/types-kit';


export type DomainFoodNutritionalUpdateData = {
    title?: string;
    value?: number;
}

export const isDomainFoodNutritionalUpdateData: TypeGuard<DomainFoodNutritionalUpdateData> = function (data): data is DomainFoodNutritionalUpdateData {
    return !(
        !isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['value'], isNumber)
    );
};

export const assertDomainFoodNutritionalUpdateData: TypeAssert<DomainFoodNutritionalUpdateData> = function (data, errorMessage) {
    if (!isDomainFoodNutritionalUpdateData(data)) {
        throw errorMessage(data);
    }
};
import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';


export type DomainFoodNutritional = {
    id: string;
    title: string;
    value: number;
}

export const isDomainFoodNutritional: TypeGuard<DomainFoodNutritional> = function (data): data is DomainFoodNutritional {
    return !(
        !isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isNumber(data['value'])
    );
};

export const assertDomainFoodNutritional: TypeAssert<DomainFoodNutritional> = function (data, errorMessage) {
    if (!isDomainFoodNutritional(data)) {
        throw errorMessage(data);
    }
};
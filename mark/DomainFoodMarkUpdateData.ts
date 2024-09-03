import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isOptional,
} from '@vanyamate/types-kit';


export type DomainFoodMarkUpdateData = {
    title?: string;
    color?: string;
}

export const isDomainFoodMarkUpdateData: TypeGuard<DomainFoodMarkUpdateData> = function (data): data is DomainFoodMarkUpdateData {
    return !(
        !isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['color'], isString)
    );
};

export const assertDomainFoodMarkUpdateData: TypeAssert<DomainFoodMarkUpdateData> = function (data, errorMessage) {
    if (!isDomainFoodMarkUpdateData(data)) {
        throw errorMessage(data);
    }
};
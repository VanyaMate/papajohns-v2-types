import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isOptional,
} from '@vanyamate/types-kit';


export type DomainFoodCategoryUpdateData = {
    title?: string;
    image?: string;
}

export const isDomainFoodCategoryUpdateData: TypeGuard<DomainFoodCategoryUpdateData> = function (data): data is DomainFoodCategoryUpdateData {
    return !(
        !isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['image'], isString)
    );
};

export const assertDomainFoodCategoryUpdateData: TypeAssert<DomainFoodCategoryUpdateData> = function (data, errorMessage) {
    if (!isDomainFoodCategoryUpdateData(data)) {
        throw errorMessage(data);
    }
};
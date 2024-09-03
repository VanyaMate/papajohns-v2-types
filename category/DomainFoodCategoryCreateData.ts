import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainFoodCategoryCreateData = {
    title: string;
    image: string;
}

export const isDomainFoodCategoryCreateData: TypeGuard<DomainFoodCategoryCreateData> = function (data): data is DomainFoodCategoryCreateData {
    return !(
        !isObject(data) ||
        !isString(data['title']) ||
        !isString(data['image'])
    );
};

export const assertDomainFoodCategoryCreateData: TypeAssert<DomainFoodCategoryCreateData> = function (data, errorMessage) {
    if (!isDomainFoodCategoryCreateData(data)) {
        throw errorMessage(data);
    }
};
import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber, isArray, isOptional,
} from '@vanyamate/types-kit';
import { DomainFoodCategoryType } from '../../common/category/DomainCategory';


export type DomainFoodBaseUpdateData = {
    title?: string;
    image?: string;
    price?: number;
    categoryType?: Array<DomainFoodCategoryType>;
}

export const isDomainFoodBaseUpdateData: TypeGuard<DomainFoodBaseUpdateData> = function (data): data is DomainFoodBaseUpdateData {
    return !(
        !isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['price'], isNumber) ||
        !isOptional(data['categoryType'], (value) => isArray(value, isString))
    );
};

export const assertDomainFoodBaseUpdateData: TypeAssert<DomainFoodBaseUpdateData> = function (data, errorMessage) {
    if (!isDomainFoodBaseUpdateData(data)) {
        throw errorMessage(data);
    }
};
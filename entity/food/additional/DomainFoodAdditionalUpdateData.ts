import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber, isOptional,
} from '@vanyamate/types-kit';
import { DomainCategoryType } from '../../common/category/DomainCategory';


export type DomainFoodAdditionalUpdateData = {
    title?: string;
    image?: string;
    price?: number;
    categoryType?: DomainCategoryType;
}

export const isDomainFoodAdditionalUpdateData: TypeGuard<DomainFoodAdditionalUpdateData> = function (data): data is DomainFoodAdditionalUpdateData {
    return !(
        !isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['image'], isString) ||
        !isOptional(data['categoryType'], isString) ||
        !isOptional(data['price'], isString)
    );
};

export const assertDomainFoodAdditionalUpdateData: TypeAssert<DomainFoodAdditionalUpdateData> = function (data, errorMessage) {
    if (!isDomainFoodAdditionalUpdateData(data)) {
        throw errorMessage(data);
    }
};
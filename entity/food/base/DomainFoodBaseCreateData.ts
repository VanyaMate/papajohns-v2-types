import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber, isArray,
} from '@vanyamate/types-kit';
import { DomainCategoryType } from '../../common/category/DomainCategory';


export type DomainFoodBaseCreateData = {
    title: string;
    image: string;
    price: number;
    categoryType: Array<DomainCategoryType>;
}

export const isDomainFoodBaseCreateData: TypeGuard<DomainFoodBaseCreateData> = function (data): data is DomainFoodBaseCreateData {
    return !(
        !isObject(data) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isNumber(data['price']) ||
        !isArray(data['categoryType'], isString)
    );
};

export const assertDomainFoodBaseCreateData: TypeAssert<DomainFoodBaseCreateData> = function (data, errorMessage) {
    if (!isDomainFoodBaseCreateData(data)) {
        throw errorMessage(data);
    }
};
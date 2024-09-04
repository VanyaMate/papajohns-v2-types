import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';
import { DomainFoodCategoryType } from '../../common/category/DomainCategory';


export type DomainFoodAdditionalCreateData = {
    title: string;
    image: string;
    price: number;
    categoryType: DomainFoodCategoryType;
}

export const isDomainFoodAdditionalCreateData: TypeGuard<DomainFoodAdditionalCreateData> = function (data): data is DomainFoodAdditionalCreateData {
    return !(
        !isObject(data) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isString(data['categoryType']) ||
        !isNumber(data['price'])
    );
};

export const assertDomainFoodAdditionalCreateData: TypeAssert<DomainFoodAdditionalCreateData> = function (data, errorMessage) {
    if (!isDomainFoodAdditionalCreateData(data)) {
        throw errorMessage(data);
    }
};
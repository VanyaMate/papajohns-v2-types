import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isArray, isNumber,
} from '@vanyamate/types-kit';
import { DomainFoodCategoryType } from '../../common/category/DomainCategory';


export type DomainFoodBase = {
    id: string;
    title: string;
    image: string;
    price: number;
}

export const isDomainFoodBase: TypeGuard<DomainFoodBase> = function (data): data is DomainFoodBase {
    return !(
        !isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isNumber(data['price'])
    );
};

export const assertDomainFoodBase: TypeAssert<DomainFoodBase> = function (data, errorMessage) {
    if (!isDomainFoodBase(data)) {
        throw errorMessage(data);
    }
};
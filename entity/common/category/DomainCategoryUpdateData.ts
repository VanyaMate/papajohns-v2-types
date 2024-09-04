import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isOptional,
} from '@vanyamate/types-kit';
import { DomainFoodCategoryType } from './DomainCategory';


export type DomainCategoryUpdateData = {
    type?: DomainFoodCategoryType;
    image?: string;
}

export const isDomainCategoryUpdateData: TypeGuard<DomainCategoryUpdateData> = function (data): data is DomainCategoryUpdateData {
    return !(
        !isObject(data) ||
        !isOptional(data['type'], isString) ||
        !isOptional(data['image'], isString)
    );
};

export const assertDomainCategoryUpdateData: TypeAssert<DomainCategoryUpdateData> = function (data, errorMessage) {
    if (!isDomainCategoryUpdateData(data)) {
        throw errorMessage(data);
    }
};
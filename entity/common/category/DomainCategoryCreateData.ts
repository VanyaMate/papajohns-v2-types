import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';
import { DomainCategoryType } from './DomainCategory';


export type DomainCategoryCreateData = {
    type: DomainCategoryType;
    image: string;
}

export const isDomainCategoryCreateData: TypeGuard<DomainCategoryCreateData> = function (data): data is DomainCategoryCreateData {
    return !(
        !isObject(data) ||
        !isString(data['type']) ||
        !isString(data['image'])
    );
};

export const assertDomainCategoryCreateData: TypeAssert<DomainCategoryCreateData> = function (data, errorMessage) {
    if (!isDomainCategoryCreateData(data)) {
        throw errorMessage(data);
    }
};
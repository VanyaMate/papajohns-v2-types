import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export enum DomainFoodCategoryType {
    PIZZA  = 'pizza',
    COFFEE = 'coffee'
}

export type DomainCategory = {
    id: string;
    type: DomainFoodCategoryType;
    image: string;
}

export const isDomainCategory: TypeGuard<DomainCategory> = function (data): data is DomainCategory {
    return !(
        !isObject(data) ||
        !isString(data['id']) ||
        !isString(data['type']) ||
        !isString(data['image'])
    );
};

export const assertDomainCategory: TypeAssert<DomainCategory> = function (data, errorMessage) {
    if (!isDomainCategory(data)) {
        throw errorMessage(data);
    }
};
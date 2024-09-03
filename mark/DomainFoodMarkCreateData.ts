import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainFoodMarkCreateData = {
    title: string;
    color: string;
}

export const isDomainFoodMarkCreateData: TypeGuard<DomainFoodMarkCreateData> = function (data): data is DomainFoodMarkCreateData {
    return !(
        !isObject(data) ||
        !isString(data['title']) ||
        !isString(data['color'])
    );
};

export const assertDomainFoodMarkCreateData: TypeAssert<DomainFoodMarkCreateData> = function (data, errorMessage) {
    if (!isDomainFoodMarkCreateData(data)) {
        throw errorMessage(data);
    }
};
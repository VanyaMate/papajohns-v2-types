import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainFoodCreateData = {
    title: string;
    image: string;
    description: string;
}

export const isDomainFoodCreateData: TypeGuard<DomainFoodCreateData> = function (data): data is DomainFoodCreateData {
    return !(
        !isObject(data) ||
        !isString(data['title']) ||
        !isString(data['image']) ||
        !isString(data['description'])
    );
};

export const assertDomainFoodCreateData: TypeAssert<DomainFoodCreateData> = function (data, errorMessage) {
    if (!isDomainFoodCreateData(data)) {
        throw errorMessage(data);
    }
};
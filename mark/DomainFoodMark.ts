import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainFoodMark = {
    id: string;
    title: string;
    color: string;
}

export const isDomainFoodMark: TypeGuard<DomainFoodMark> = function (data): data is DomainFoodMark {
    return !(
        !isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isString(data['color'])
    );
};

export const assertDomainFoodMark: TypeAssert<DomainFoodMark> = function (data, errorMessage) {
    if (!isDomainFoodMark(data)) {
        throw errorMessage(data);
    }
};
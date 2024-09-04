import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainMark = {
    id: string;
    title: string;
    color: string;
}

export const isDomainMark: TypeGuard<DomainMark> = function (data): data is DomainMark {
    return !(
        !isObject(data) ||
        !isString(data['id']) ||
        !isString(data['title']) ||
        !isString(data['color'])
    );
};

export const assertDomainMark: TypeAssert<DomainMark> = function (data, errorMessage) {
    if (!isDomainMark(data)) {
        throw errorMessage(data);
    }
};
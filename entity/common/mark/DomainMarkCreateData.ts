import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainMarkCreateData = {
    title: string;
    color: string;
}

export const isDomainMarkCreateData: TypeGuard<DomainMarkCreateData> = function (data): data is DomainMarkCreateData {
    return !(
        !isObject(data) ||
        !isString(data['title']) ||
        !isString(data['color'])
    );
};

export const assertDomainMarkCreateData: TypeAssert<DomainMarkCreateData> = function (data, errorMessage) {
    if (!isDomainMarkCreateData(data)) {
        throw errorMessage(data);
    }
};
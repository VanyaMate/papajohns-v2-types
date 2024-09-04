import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isOptional,
} from '@vanyamate/types-kit';


export type DomainMarkUpdateData = {
    title?: string;
    color?: string;
}

export const isDomainMarkUpdateData: TypeGuard<DomainMarkUpdateData> = function (data): data is DomainMarkUpdateData {
    return !(
        !isObject(data) ||
        !isOptional(data['title'], isString) ||
        !isOptional(data['color'], isString)
    );
};

export const assertDomainMarkUpdateData: TypeAssert<DomainMarkUpdateData> = function (data, errorMessage) {
    if (!isDomainMarkUpdateData(data)) {
        throw errorMessage(data);
    }
};
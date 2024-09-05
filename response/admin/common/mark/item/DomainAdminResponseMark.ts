import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';
import {
    DomainCompositeMark,
    isDomainCompositeMark,
} from '../../../../../composite';


export type DomainAdminResponseMark = DomainCompositeMark;

export const isDomainAdminResponseMark: TypeGuard<DomainAdminResponseMark> = function (data): data is DomainAdminResponseMark {
    return isDomainCompositeMark(data);
};

export const assertDomainAdminResponseMark: TypeAssert<DomainAdminResponseMark> = function (data, errorMessage) {
    if (!isDomainAdminResponseMark(data)) {
        throw errorMessage(data);
    }
};
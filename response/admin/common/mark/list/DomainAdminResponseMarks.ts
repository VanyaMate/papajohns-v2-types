import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isArray,
} from '@vanyamate/types-kit';
import {
    DomainCompositeCountMark,
    isDomainCompositeCountMark,
} from '../../../../../composite';


export type DomainAdminResponseMarks = Array<DomainCompositeCountMark>;

export const isDomainAdminResponseMarks: TypeGuard<DomainAdminResponseMarks> = function (data): data is DomainAdminResponseMarks {
    return isArray(data, isDomainCompositeCountMark);
};

export const assertDomainAdminResponseMarks: TypeAssert<DomainAdminResponseMarks> = function (data, errorMessage) {
    if (!isDomainAdminResponseMarks(data)) {
        throw errorMessage(data);
    }
};
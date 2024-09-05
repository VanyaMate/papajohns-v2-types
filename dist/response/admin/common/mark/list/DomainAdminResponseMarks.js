import { isArray, } from '@vanyamate/types-kit';
import { isDomainCompositeCountMark, } from '../../../../../composite';
export const isDomainAdminResponseMarks = function (data) {
    return isArray(data, isDomainCompositeCountMark);
};
export const assertDomainAdminResponseMarks = function (data, errorMessage) {
    if (!isDomainAdminResponseMarks(data)) {
        throw errorMessage(data);
    }
};

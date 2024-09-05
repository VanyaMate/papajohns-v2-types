import { isDomainCompositeCategory, } from '../../../../../composite';
export const isDomainAdminResponseCategory = function (data) {
    return isDomainCompositeCategory(data);
};
export const assertDomainAdminResponseCategory = function (data, errorMessage) {
    if (!isDomainAdminResponseCategory(data)) {
        throw errorMessage(data);
    }
};

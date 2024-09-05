import { isDomainCompositeMark, } from '../../../../../composite';
export const isDomainAdminResponseMark = function (data) {
    return isDomainCompositeMark(data);
};
export const assertDomainAdminResponseMark = function (data, errorMessage) {
    if (!isDomainAdminResponseMark(data)) {
        throw errorMessage(data);
    }
};

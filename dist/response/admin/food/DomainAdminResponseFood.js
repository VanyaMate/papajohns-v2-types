import { isDomainCompositeFood } from '../../../composite';
export const isDomainAdminResponseFood = function (data) {
    return isDomainCompositeFood(data);
};
export const assertDomainAdminResponseFood = function (data, errorMessage) {
    if (!isDomainAdminResponseFood(data)) {
        throw errorMessage(data);
    }
};

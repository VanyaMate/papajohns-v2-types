import { isNumber, } from '@vanyamate/types-kit';
import { isDomainFoodIngredient, } from '../../../entity';
export const isDomainCompositeCountFoodIngredient = function (data) {
    return !(!isDomainFoodIngredient(data) ||
        !isNumber(data['foods']) ||
        !isNumber(data['categories']));
};
export const assertDomainCompositeCountFoodIngredient = function (data, errorMessage) {
    if (!isDomainCompositeCountFoodIngredient(data)) {
        throw errorMessage(data);
    }
};

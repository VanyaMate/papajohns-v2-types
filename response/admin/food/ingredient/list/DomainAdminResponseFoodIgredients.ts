import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isArray,
} from '@vanyamate/types-kit';
import {
    DomainCompositeCountFoodIngredient,
    isDomainCompositeCountFoodIngredient,
} from '../../../../../composite';


export type DomainAdminResponseFoodIgredients = Array<DomainCompositeCountFoodIngredient>;

export const isDomainAdminResponseFoodIgredients: TypeGuard<DomainAdminResponseFoodIgredients> = function (data): data is DomainAdminResponseFoodIgredients {
    return isArray(data, isDomainCompositeCountFoodIngredient);
};

export const assertDomainAdminResponseFoodIgredients: TypeAssert<DomainAdminResponseFoodIgredients> = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodIgredients(data)) {
        throw errorMessage(data);
    }
};
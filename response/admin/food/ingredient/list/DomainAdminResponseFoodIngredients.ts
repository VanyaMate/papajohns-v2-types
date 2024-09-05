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


export type DomainAdminResponseFoodIngredients = Array<DomainCompositeCountFoodIngredient>;

export const isDomainAdminResponseFoodIngredients: TypeGuard<DomainAdminResponseFoodIngredients> = function (data): data is DomainAdminResponseFoodIngredients {
    return isArray(data, isDomainCompositeCountFoodIngredient);
};

export const assertDomainAdminResponseFoodIngredients: TypeAssert<DomainAdminResponseFoodIngredients> = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodIngredients(data)) {
        throw errorMessage(data);
    }
};
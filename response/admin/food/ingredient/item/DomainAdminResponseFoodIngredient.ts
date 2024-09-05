import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';
import {
    DomainCompositeFoodIngredient,
    isDomainCompositeFoodIngredient,
} from '../../../../../composite';


export type DomainAdminResponseFoodIngredient = DomainCompositeFoodIngredient;

export const isDomainAdminResponseFoodIngredient: TypeGuard<DomainAdminResponseFoodIngredient> = function (data): data is DomainAdminResponseFoodIngredient {
    return isDomainCompositeFoodIngredient(data);
};

export const assertDomainAdminResponseFoodIngredient: TypeAssert<DomainAdminResponseFoodIngredient> = function (data, errorMessage) {
    if (!isDomainAdminResponseFoodIngredient(data)) {
        throw errorMessage(data);
    }
};
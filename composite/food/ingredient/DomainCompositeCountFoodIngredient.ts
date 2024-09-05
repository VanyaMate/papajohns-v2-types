import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';
import {
    DomainCategory,
    DomainFood,
    DomainFoodIngredient, isDomainFoodIngredient,
} from '../../../entity';


export type DomainCompositeCountFoodIngredient = DomainFoodIngredient & {
    foods: number;
    categories: number;
}

export const isDomainCompositeCountFoodIngredient: TypeGuard<DomainCompositeCountFoodIngredient> = function (data): data is DomainCompositeCountFoodIngredient {
    return !(
        !isDomainFoodIngredient(data) ||
        !isNumber((data as any)['foods']) ||
        !isNumber((data as any)['categories'])
    );
};

export const assertDomainCompositeCountFoodIngredient: TypeAssert<DomainCompositeCountFoodIngredient> = function (data, errorMessage) {
    if (!isDomainCompositeCountFoodIngredient(data)) {
        throw errorMessage(data);
    }
};
import {
    TypeGuard,
    TypeAssert,
    isArray,
} from '@vanyamate/types-kit';
import {
    DomainCategory,
    DomainFood,
    DomainFoodIngredient,
    isDomainCategory,
    isDomainFood,
    isDomainFoodIngredient,
} from '../../../entity';


export type DomainCompositeFoodIngredient = DomainFoodIngredient & {
    foods: Array<DomainFood>;
    categories: Array<DomainCategory>
}

export const isDomainCompositeFoodIngredient: TypeGuard<DomainCompositeFoodIngredient> = function (data): data is DomainCompositeFoodIngredient {
    return !(
        !isDomainFoodIngredient(data) ||
        !isArray((data as any)['foods'], isDomainFood) ||
        !isArray((data as any)['categories'], isDomainCategory)
    );
};

export const assertDomainCompositeFoodIngredient: TypeAssert<DomainCompositeFoodIngredient> = function (data, errorMessage) {
    if (!isDomainCompositeFoodIngredient(data)) {
        throw errorMessage(data);
    }
};
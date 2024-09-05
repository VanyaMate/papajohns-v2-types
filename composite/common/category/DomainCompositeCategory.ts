import {
    TypeGuard,
    TypeAssert,
    isArray,
} from '@vanyamate/types-kit';
import {
    DomainCategory,
    DomainFood,
    DomainFoodAdditional,
    DomainFoodBase,
    DomainFoodIngredient,
    DomainFoodSize,
    isDomainCategory,
    isDomainFood,
    isDomainFoodAdditional,
    isDomainFoodBase,
    isDomainFoodIngredient,
    isDomainFoodSize,
} from '../../../entity';


export type DomainCompositeCategory = DomainCategory & {
    foods: Array<DomainFood>;
    ingredients: Array<DomainFoodIngredient>;
    bases: Array<DomainFoodBase>;
    sizes: Array<DomainFoodSize>;
    additionals: Array<DomainFoodAdditional>;
}

export const isDomainCompositeCategory: TypeGuard<DomainCompositeCategory> = function (data): data is DomainCompositeCategory {
    return !(
        !isDomainCategory(data) ||
        !isArray((data as any)['foods'], isDomainFood) ||
        !isArray((data as any)['ingredients'], isDomainFoodIngredient) ||
        !isArray((data as any)['bases'], isDomainFoodBase) ||
        !isArray((data as any)['sizes'], isDomainFoodSize) ||
        !isArray((data as any)['additionals'], isDomainFoodAdditional)
    );
};

export const assertDomainCompositeCategory: TypeAssert<DomainCompositeCategory> = function (data, errorMessage) {
    if (!isDomainCompositeCategory(data)) {
        throw errorMessage(data);
    }
};
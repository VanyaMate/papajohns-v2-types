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
    DomainMark, isDomainCategory,
    isDomainFood,
    isDomainFoodAdditional, isDomainFoodBase,
    isDomainFoodIngredient, isDomainFoodSize,
    isDomainMark,
} from '../../entity';


export type DomainCompositeFood = DomainFood & {
    marks: Array<DomainMark>;
    categories: Array<DomainCategory>;
    bases: Array<DomainFoodBase>;
    sizes: Array<DomainFoodSize>;
    additionals: Array<DomainFoodAdditional>;
    ingredients: Array<DomainFoodIngredient>;
}

export const isDomainCompositeFood: TypeGuard<DomainCompositeFood> = function (data): data is DomainCompositeFood {
    return !(
        !isDomainFood(data) ||
        !isArray((data as any)['marks'], isDomainMark) ||
        !isArray((data as any)['categories'], isDomainCategory) ||
        !isArray((data as any)['bases'], isDomainFoodBase) ||
        !isArray((data as any)['sizes'], isDomainFoodSize) ||
        !isArray((data as any)['additionals'], isDomainFoodAdditional) ||
        !isArray((data as any)['ingredients'], isDomainFoodIngredient)
    );
};

export const assertDomainCompositeFood: TypeAssert<DomainCompositeFood> = function (data, errorMessage) {
    if (!isDomainCompositeFood(data)) {
        throw errorMessage(data);
    }
};
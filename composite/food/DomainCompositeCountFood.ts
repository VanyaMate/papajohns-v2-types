import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';
import {
    DomainCategory, DomainFood, DomainFoodAdditional,
    DomainFoodBase, DomainFoodIngredient,
    DomainFoodSize,
    DomainMark, isDomainFood,
} from '../../entity';


export type DomainCompositeCountFood = DomainFood & {
    marks: number;
    categories: number;
    bases: number;
    sizes: number;
    additionals: number;
    ingredients: number;
}

export const isDomainCompositeCountFood: TypeGuard<DomainCompositeCountFood> = function (data): data is DomainCompositeCountFood {
    return !(
        !isDomainFood(data) ||
        !isNumber((data as any)['marks']) ||
        !isNumber((data as any)['categories']) ||
        !isNumber((data as any)['bases']) ||
        !isNumber((data as any)['sizes']) ||
        !isNumber((data as any)['additionals']) ||
        !isNumber((data as any)['ingredients'])
    );
};

export const assertDomainCompositeCountFood: TypeAssert<DomainCompositeCountFood> = function (data, errorMessage) {
    if (!isDomainCompositeCountFood(data)) {
        throw errorMessage(data);
    }
};
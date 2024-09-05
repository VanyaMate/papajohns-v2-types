import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';
import {
    DomainCategory,
    DomainFood, DomainFoodAdditional,
    DomainFoodBase,
    DomainFoodIngredient, DomainFoodSize, isDomainCategory,
} from '../../../entity';


export type DomainCompositeCountCategory = DomainCategory & {
    foods: number;
    ingredients: number;
    bases: number;
    sizes: number;
    additionals: number;
}

export const isDomainCompositeCountCategory: TypeGuard<DomainCompositeCountCategory> = function (data): data is DomainCompositeCountCategory {
    return !(
        !isDomainCategory(data) ||
        !isNumber((data as any)['foods']) ||
        !isNumber((data as any)['ingredients']) ||
        !isNumber((data as any)['bases']) ||
        !isNumber((data as any)['sizes']) ||
        !isNumber((data as any)['additionals'])
    );
};

export const assertDomainCompositeCountCategory: TypeAssert<DomainCompositeCountCategory> = function (data, errorMessage) {
    if (!isDomainCompositeCountCategory(data)) {
        throw errorMessage(data);
    }
};
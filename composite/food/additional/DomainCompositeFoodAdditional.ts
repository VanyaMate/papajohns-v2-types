import {
    TypeGuard,
    TypeAssert,
    isArray,
} from '@vanyamate/types-kit';
import {
    DomainCategory,
    DomainFood,
    DomainFoodAdditional,
    DomainFoodSize,
    isDomainCategory,
    isDomainFoodAdditional,
    isDomainFoodBase,
    isDomainFoodSize,
} from '../../../entity';


export type DomainCompositeFoodAdditional = DomainFoodAdditional & {
    bases: Array<DomainFood>;
    sizes: Array<DomainFoodSize>;
    categories: Array<DomainCategory>;
}

export const isDomainCompositeFoodAdditional: TypeGuard<DomainCompositeFoodAdditional> = function (data): data is DomainCompositeFoodAdditional {
    return !(
        !isDomainFoodAdditional(data) ||
        !isArray((data as any)['bases'], isDomainFoodBase) ||
        !isArray((data as any)['sizes'], isDomainFoodSize) ||
        !isArray((data as any)['categories'], isDomainCategory)
    );
};

export const assertDomainCompositeFoodAdditional: TypeAssert<DomainCompositeFoodAdditional> = function (data, errorMessage) {
    if (!isDomainCompositeFoodAdditional(data)) {
        throw errorMessage(data);
    }
};
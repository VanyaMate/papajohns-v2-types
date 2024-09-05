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
    DomainFoodSize,
    isDomainCategory,
    isDomainFood,
    isDomainFoodAdditional,
    isDomainFoodBase,
    isDomainFoodSize,
} from '../../../entity';


export type DomainCompositeFoodBase = DomainFoodBase & {
    foods: Array<DomainFood>;
    sizes: Array<DomainFoodSize>;
    additionals: Array<DomainFoodAdditional>;
    categories: Array<DomainCategory>;
}

export const isDomainCompositeFoodBase: TypeGuard<DomainCompositeFoodBase> = function (data): data is DomainCompositeFoodBase {
    return !(
        !isDomainFoodBase(data) ||
        !isArray((data as any)['foods'], isDomainFood) ||
        !isArray((data as any)['sizes'], isDomainFoodSize) ||
        !isArray((data as any)['additionals'], isDomainFoodAdditional) ||
        !isArray((data as any)['categories'], isDomainCategory)
    );
};

export const assertDomainCompositeFoodBase: TypeAssert<DomainCompositeFoodBase> = function (data, errorMessage) {
    if (!isDomainCompositeFoodBase(data)) {
        throw errorMessage(data);
    }
};
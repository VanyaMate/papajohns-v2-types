import {
    TypeGuard,
    TypeAssert,
    isArray,
} from '@vanyamate/types-kit';
import {
    DomainCategory,
    DomainFoodAdditional,
    DomainFoodBase,
    DomainFoodSize,
    isDomainCategory,
    isDomainFoodAdditional,
    isDomainFoodBase,
    isDomainFoodSize,
} from '../../../entity';


export type DomainCompositeFoodSize = DomainFoodSize & {
    bases: Array<DomainFoodBase>;
    additionals: Array<DomainFoodAdditional>;
    categories: Array<DomainCategory>;
}

export const isDomainCompositeFoodSize: TypeGuard<DomainCompositeFoodSize> = function (data): data is DomainCompositeFoodSize {
    return !(
        !isDomainFoodSize(data) ||
        !isArray((data as any)['bases'], isDomainFoodBase) ||
        !isArray((data as any)['additionals'], isDomainFoodAdditional) ||
        !isArray((data as any)['categories'], isDomainCategory)
    );
};

export const assertDomainCompositeFoodSize: TypeAssert<DomainCompositeFoodSize> = function (data, errorMessage) {
    if (!isDomainCompositeFoodSize(data)) {
        throw errorMessage(data);
    }
};
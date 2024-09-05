import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';
import {
    DomainCategory,
    DomainFood,
    DomainFoodAdditional,
    DomainFoodBase,
    DomainFoodSize, isDomainFood, isDomainFoodBase,
} from '../../../entity';


export type DomainCompositeCountFoodBase = DomainFoodBase & {
    foods: number;
    sizes: number;
    additionals: number;
    categories: number;
}

export const isDomainCompositeCountFoodBase: TypeGuard<DomainCompositeCountFoodBase> = function (data): data is DomainCompositeCountFoodBase {
    return !(
        !isDomainFoodBase(data) ||
        !isNumber((data as any)['foods']) ||
        !isNumber((data as any)['sizes']) ||
        !isNumber((data as any)['additionals']) ||
        !isNumber((data as any)['categories'])
    );
};

export const assertDomainCompositeCountFoodBase: TypeAssert<DomainCompositeCountFoodBase> = function (data, errorMessage) {
    if (!isDomainCompositeCountFoodBase(data)) {
        throw errorMessage(data);
    }
};
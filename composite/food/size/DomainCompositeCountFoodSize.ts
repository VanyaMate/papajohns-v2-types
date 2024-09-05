import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber,
} from '@vanyamate/types-kit';
import {
    DomainCategory,
    DomainFoodAdditional,
    DomainFoodBase, DomainFoodSize, isDomainFoodSize,
} from '../../../entity';


export type DomainCompositeCountFoodSize = DomainFoodSize & {
    bases: number;
    additionals: number;
    categories: number;
}

export const isDomainCompositeCountFoodSize: TypeGuard<DomainCompositeCountFoodSize> = function (data): data is DomainCompositeCountFoodSize {
    return !(
        !isDomainFoodSize(data) ||
        !isNumber((data as any)['bases']) ||
        !isNumber((data as any)['additionals']) ||
        !isNumber((data as any)['categories'])
    );
};

export const assertDomainCompositeCountFoodSize: TypeAssert<DomainCompositeCountFoodSize> = function (data, errorMessage) {
    if (!isDomainCompositeCountFoodSize(data)) {
        throw errorMessage(data);
    }
};
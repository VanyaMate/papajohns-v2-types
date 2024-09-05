import {
    TypeGuard,
    TypeAssert,
    isNumber,
} from '@vanyamate/types-kit';
import { DomainFoodAdditional, isDomainFoodAdditional } from '../../../entity';


export type DomainCompositeCountFoodAdditional = DomainFoodAdditional & {
    bases: number;
    sizes: number;
    categories: number;
}

export const isDomainCompositeCountFoodAdditional: TypeGuard<DomainCompositeCountFoodAdditional> = function (data): data is DomainCompositeCountFoodAdditional {
    return !(
        !isDomainFoodAdditional(data) ||
        !isNumber((data as any)['bases']) ||
        !isNumber((data as any)['sizes']) ||
        !isNumber((data as any)['categories'])
    );
};

export const assertDomainCompositeCountFoodAdditional: TypeAssert<DomainCompositeCountFoodAdditional> = function (data, errorMessage) {
    if (!isDomainCompositeCountFoodAdditional(data)) {
        throw errorMessage(data);
    }
};
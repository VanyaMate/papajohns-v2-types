import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodBase } from '../../../entity';
export type DomainCompositeCountFoodBase = DomainFoodBase & {
    foods: number;
    sizes: number;
    additionals: number;
    categories: number;
};
export declare const isDomainCompositeCountFoodBase: TypeGuard<DomainCompositeCountFoodBase>;
export declare const assertDomainCompositeCountFoodBase: TypeAssert<DomainCompositeCountFoodBase>;

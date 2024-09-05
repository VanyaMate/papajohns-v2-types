import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFoodAdditional } from '../../../entity';
export type DomainCompositeCountFoodAdditional = DomainFoodAdditional & {
    bases: number;
    sizes: number;
    categories: number;
};
export declare const isDomainCompositeCountFoodAdditional: TypeGuard<DomainCompositeCountFoodAdditional>;
export declare const assertDomainCompositeCountFoodAdditional: TypeAssert<DomainCompositeCountFoodAdditional>;

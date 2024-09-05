import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainCategory } from '../../../entity';
export type DomainCompositeCountCategory = DomainCategory & {
    foods: number;
    ingredients: number;
    bases: number;
    sizes: number;
    additionals: number;
};
export declare const isDomainCompositeCountCategory: TypeGuard<DomainCompositeCountCategory>;
export declare const assertDomainCompositeCountCategory: TypeAssert<DomainCompositeCountCategory>;

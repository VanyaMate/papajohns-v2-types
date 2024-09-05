import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainFood } from '../../entity';
export type DomainCompositeCountFood = DomainFood & {
    marks: number;
    categories: number;
    bases: number;
    sizes: number;
    additionals: number;
    ingredients: number;
};
export declare const isDomainCompositeCountFood: TypeGuard<DomainCompositeCountFood>;
export declare const assertDomainCompositeCountFood: TypeAssert<DomainCompositeCountFood>;

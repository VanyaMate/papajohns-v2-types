import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodSizeUpdateData = {
    title?: string;
    multiplier?: number;
    person?: number;
};
export declare const isDomainFoodSizeUpdateData: TypeGuard<DomainFoodSizeUpdateData>;
export declare const assertDomainFoodSizeUpdateData: TypeAssert<DomainFoodSizeUpdateData>;

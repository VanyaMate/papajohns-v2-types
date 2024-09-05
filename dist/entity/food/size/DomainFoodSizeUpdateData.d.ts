import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodSizeUpdateData = {
    title?: string;
    image?: string;
    multiplier?: number;
    baseId?: string;
};
export declare const isDomainFoodSizeUpdateData: TypeGuard<DomainFoodSizeUpdateData>;
export declare const assertDomainFoodSizeUpdateData: TypeAssert<DomainFoodSizeUpdateData>;

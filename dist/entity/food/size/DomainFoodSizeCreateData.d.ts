import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodSizeCreateData = {
    title: string;
    image: string;
    multiplier: number;
    baseId: string;
};
export declare const isDomainFoodSizeCreateData: TypeGuard<DomainFoodSizeCreateData>;
export declare const assertDomainFoodSizeCreateData: TypeAssert<DomainFoodSizeCreateData>;

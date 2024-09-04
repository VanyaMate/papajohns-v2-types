import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodSizeCreateData = {
    title: string;
    multiplier: number;
    person: number;
};
export declare const isDomainFoodSizeCreateData: TypeGuard<DomainFoodSizeCreateData>;
export declare const assertDomainFoodSizeCreateData: TypeAssert<DomainFoodSizeCreateData>;

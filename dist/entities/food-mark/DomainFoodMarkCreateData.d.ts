import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodMarkCreateData = {
    title: string;
    color: string;
};
export declare const isDomainFoodMarkCreateData: TypeGuard<DomainFoodMarkCreateData>;
export declare const assertDomainFoodMarkCreateData: TypeAssert<DomainFoodMarkCreateData>;

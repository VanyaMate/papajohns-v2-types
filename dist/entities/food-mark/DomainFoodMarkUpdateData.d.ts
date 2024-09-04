import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodMarkUpdateData = {
    title?: string;
    color?: string;
};
export declare const isDomainFoodMarkUpdateData: TypeGuard<DomainFoodMarkUpdateData>;
export declare const assertDomainFoodMarkUpdateData: TypeAssert<DomainFoodMarkUpdateData>;

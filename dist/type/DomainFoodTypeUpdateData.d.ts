import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodTypeUpdateData = {
    title?: string;
    image?: string;
    price?: string;
};
export declare const isDomainFoodTypeUpdateData: TypeGuard<DomainFoodTypeUpdateData>;
export declare const assertDomainFoodTypeUpdateData: TypeAssert<DomainFoodTypeUpdateData>;

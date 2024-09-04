import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodAdditionalUpdateData = {
    title?: string;
    price?: number;
    image?: string;
    description?: string;
};
export declare const isDomainFoodAdditionalUpdateData: TypeGuard<DomainFoodAdditionalUpdateData>;
export declare const assertDomainFoodAdditionalUpdateData: TypeAssert<DomainFoodAdditionalUpdateData>;

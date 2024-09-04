import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodUpdateData = {
    title?: string;
    image?: string;
    description?: string;
};
export declare const isDomainFoodUpdateData: TypeGuard<DomainFoodUpdateData>;
export declare const assertDomainFoodUpdateData: TypeAssert<DomainFoodUpdateData>;

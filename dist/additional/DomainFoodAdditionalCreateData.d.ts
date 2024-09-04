import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodAdditionalCreateData = {
    title: string;
    price: number;
    image?: string;
    description?: string;
};
export declare const isDomainFoodAdditionalCreateData: TypeGuard<DomainFoodAdditionalCreateData>;
export declare const assertDomainFoodAdditionalCreateData: TypeAssert<DomainFoodAdditionalCreateData>;

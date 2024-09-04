import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodAdditional = {
    id: string;
    image: string;
    title: string;
    description: string;
    price: number;
};
export declare const isDomainFoodAdditional: TypeGuard<DomainFoodAdditional>;
export declare const assertDomainFoodAdditional: TypeAssert<DomainFoodAdditional>;

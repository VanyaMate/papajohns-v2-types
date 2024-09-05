import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodBase = {
    id: string;
    title: string;
    image: string;
    price: number;
};
export declare const isDomainFoodBase: TypeGuard<DomainFoodBase>;
export declare const assertDomainFoodBase: TypeAssert<DomainFoodBase>;

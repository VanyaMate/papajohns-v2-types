import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodTypeCreateData = {
    title: string;
    image: string;
    price: string;
};
export declare const isDomainFoodTypeCreateData: TypeGuard<DomainFoodTypeCreateData>;
export declare const assertDomainFoodTypeCreateData: TypeAssert<DomainFoodTypeCreateData>;

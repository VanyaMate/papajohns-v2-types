import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodType = {
    id: string;
    title: string;
    image: string;
    price: string;
};
export declare const isDomainFoodType: TypeGuard<DomainFoodType>;
export declare const assertDomainFoodType: TypeAssert<DomainFoodType>;

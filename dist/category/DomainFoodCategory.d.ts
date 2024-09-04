import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodCategory = {
    id: string;
    title: string;
    image: string;
};
export declare const isDomainFoodCategory: TypeGuard<DomainFoodCategory>;
export declare const assertDomainFoodCategory: TypeAssert<DomainFoodCategory>;

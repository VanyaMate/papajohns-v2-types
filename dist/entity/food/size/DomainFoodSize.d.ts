import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodSize = {
    id: string;
    title: string;
    image: string;
    multiplier: number;
};
export declare const isDomainFoodSize: TypeGuard<DomainFoodSize>;
export declare const assertDomainFoodSize: TypeAssert<DomainFoodSize>;

import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodSize = {
    id: string;
    title: string;
    multiplier: number;
    person: number;
};
export declare const isDomainFoodSize: TypeGuard<DomainFoodSize>;
export declare const assertDomainFoodSize: TypeAssert<DomainFoodSize>;

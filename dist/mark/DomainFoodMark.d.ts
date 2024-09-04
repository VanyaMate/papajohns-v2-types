import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodMark = {
    id: string;
    title: string;
    color: string;
};
export declare const isDomainFoodMark: TypeGuard<DomainFoodMark>;
export declare const assertDomainFoodMark: TypeAssert<DomainFoodMark>;

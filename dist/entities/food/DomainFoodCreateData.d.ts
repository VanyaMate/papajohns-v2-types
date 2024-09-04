import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainFoodCreateData = {
    title: string;
    image: string;
    description: string;
};
export declare const isDomainFoodCreateData: TypeGuard<DomainFoodCreateData>;
export declare const assertDomainFoodCreateData: TypeAssert<DomainFoodCreateData>;

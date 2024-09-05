import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainMarkCreateData = {
    title: string;
    color: string;
};
export declare const isDomainMarkCreateData: TypeGuard<DomainMarkCreateData>;
export declare const assertDomainMarkCreateData: TypeAssert<DomainMarkCreateData>;

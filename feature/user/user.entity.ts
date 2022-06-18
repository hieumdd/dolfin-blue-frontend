import { TokenSet } from 'next-auth';

import { Entity } from '../../providers/firestore';

export type Tenant = {
    id: string;
    name: string;
};

export type User = Entity & {
    email: string;
    tokens: TokenSet;
    tenants: Tenant[];
};

import { Timestamp } from '@google-cloud/firestore';

export type Entity = {
    id: any;
    createdAt?: Timestamp;
    updatedAt?: Timestamp;
    isDeleted: boolean;
};

import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date | string;
    email: string;
    password: string;
    createdAt: Timestamp;
    updatedAt: Timestamp | null;
    role: string | null;
    photoUrl: string | null;
    modifiedAt: Timestamp | null;
}
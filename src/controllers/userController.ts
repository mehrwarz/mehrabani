import db from '@/_lib/database';
import {  InsertUser, User,SelectUser } from '@/models/user';
import { eq } from 'drizzle-orm';

export async function createUser(data: InsertUser) {
  await db.insert(User).values(data);
}


export async function deleteUser(id: SelectUser['id']) {
  await db.delete(User).where(eq(User.id, id));
}

export async function updateUser(data:SelectUser) {
  await db.update(User).set(data).where(eq(User.id, data.id)).returning({ updatedId: User.id });;
}

export async function getUserById(id: SelectUser['id']): Promise<
  Array<{
    id: number;
    name: string;
    age: number;
    email: string;
  }>
> {
  return db.select().from(User).where(eq(User.id, id));
}


export async function getUser(limit=100, offset=0): Promise<
Array<{
  id: number;
  name: string;
  age: number;
  email: string;
}>
> {
  return await db.select().from(User).limit(limit).offset(offset);
}


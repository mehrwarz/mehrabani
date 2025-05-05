"use server";
import {users} from "@/models/user"
import { signupSchema } from "@/schemas/signUp";
import db from "@/_lib/database";
import {eq} from "drizzle-orm"

export async function signUp(props:{}) {
  const validation = signupSchema.safeParse(props)
  if (validation.success == false) {
    return {error:validation.error.issues};
  }
  
  const validData = validation.data as any;

  const existUser = await db.select().from(users).where(eq(users.email, validData.email)).limit(1)

  if(existUser) {
    return {success: "User already registered!"}
  }

  const result = await db.insert(users).values(validData);

  console.log(result)



  return {success: " Request result"}
}

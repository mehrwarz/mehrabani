"use server";
import {User} from "@/models/user"
import { signupSchema } from "@/schemas/signUp";
import db from "@/_lib/database";
import {eq} from "drizzle-orm"
import { error } from "console";

export async function signUp(props:{}) {
  const validation = signupSchema.safeParse(props)
  if (validation.success == false) {
    return {error:validation.error.issues};
  }
  
  const validData = validation.data;

  const existUser = await db.select().from(User).where(eq(User.email, validData.email)).limit(1)

  if(existUser) {
    return {success: "User already registered!"}
  }

  const result = await db.insert(User).values(validData);

  console.log(result)



  return {success: " Request result"}
}

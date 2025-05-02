"use server";

import { createUser } from "@/controllers/userController";
import { SignupSchema } from "@/schemas/signUp";

export async function signUp(req: Request) {
  const validation = SignupSchema.safeParse(req)
  if (validation.success == false) {
    console.log("form not valication", validation);
    console.log(validation.error)

    return validation
  }
  console.log("Form validation successed! ", validation);

  console.log("requst data " , req)
  return {result: " Request result"}
}

"use server";

import { createUser } from "@/controllers/userController";
import { SignupSchema } from "@/schemas/signUp";

export async function signUp(req: Request) {
  const validation = SignupSchema.safeParse(req)
  if (validation.success == false) {
    console.log("form data not valid");
    console.log(validation.error.message)
    return {...validation.error};
  }
  console.log("Form validation successed! ", validation.error);

  console.log("requst data " , req)
  return {result: " Request result"}
}

import {auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import LoginForm from "./loginForm";

export default async function SignIn() {

    const session = await auth();

    if (session?.user) redirect('/')

    return (<LoginForm />)
}

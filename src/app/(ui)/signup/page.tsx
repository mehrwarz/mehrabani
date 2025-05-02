"use client"
import { signUp } from "@/app/actions/signup";


export default function SignupForm() {
  const handleSignup = async (e) => {
    e.preventDefault();

    // "use server"
    const result = await signUp({ name:"test user", email:"test@example.com"})
    console.log(result)
  }
  
  return (
    <form onSubmit={handleSignup}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}
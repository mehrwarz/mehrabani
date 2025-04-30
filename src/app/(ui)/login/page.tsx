"use client"
import { signIn } from "@/lib/auth"
import Link from "next/link";
import Image from "next/image";

const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
}



export default function SignIn(this: any) {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100 w-100 gradient">
            <div className="row">
                <div className="mx-auto card shadow p-0 ">
                    <div className="card-header bg-primary text-white text-center fw-bold">Login</div>
                    <div className="card-body p-4">
                        <Image src="/Images/MehrabaniBook.png" className="img-fluid mb-4" alt="Mehrabani" width={280} height={100} />
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control border border-secondary" id="exampleInputEmail1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control border border-secondary" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" name="remember" className="form-check-input border border-secondary" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me.</label>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer text-muted text-center bg-light">
                        Don't have an account? <Link href="/signup" className="text-decoration-none text-primary"> Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
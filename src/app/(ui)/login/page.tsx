"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getCsrfToken } from "next-auth/react";
import { authenticate } from "@/app/actions/authenticate";

export default function SignIn(this: any) {
    const [error, setError] = useState({}) as any;
    const [csrfToken, setCsrfToken] = useState("");

    const handleSubmit = async (event: any) => {
        try {
            const signingIn = await authenticate({
                email: event.target.email.value,
                password: event.target.password.value,
                csrfToken: csrfToken,
            });

            if (signingIn.success) {
                window.location.href = "/dashboard";
            }

            if (signingIn.error) {
                setError(signingIn.error);
            }
        } catch (error) {
            setError({ message: "Failed to login" });
        }
    };

    useEffect(() => {
        async function fetchCsrfToken() {
            const token = await getCsrfToken();
            setCsrfToken(token);
        }
        fetchCsrfToken();
    }, []);


    return (
        <div className="row">
            {error}
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100 vw-100 gradient">
                <div className="mx-auto card shadow m-0 p-0 col-md-4 col-lg-3 ">
                    <div className="card-header bg-primary text-white text-center fw-bold w-100">Login</div>
                    <div className="card-body">
                        <div className="d-flex w-100">
                            <Image src="/Images/logo.svg" className="mx-auto" alt="Mehrabani" width={190} height={150} />
                        </div>
                        <form onSubmit={handleSubmit} className="p-4">
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
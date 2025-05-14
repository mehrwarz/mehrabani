"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCsrfToken } from "next-auth/react";
import { authenticate } from "@/app/actions/auth/authenticate";
import Image from "next/image";


export default function LoginForm(){
    const [error, setError] = useState() as any;
    const [csrfToken, setCsrfToken] = useState("");

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const result = await authenticate({
                email: event.target.email.value,
                password: event.target.password.value,
                csrfToken: csrfToken,
            });
            
            if(result .success){
                window.location.href = "/settings";
                return
            }
            if (result .error) {
                setError(result.error.message);
                return false
            }
        } catch (error) {
            const res = await fetch("http://localhost:3000/api/auth/signin/credentials");
            const err = await res.json();
            if(err.error){
                setError(err.error);
                return
            }
            setError("Please try again later.");
        }
    };

    useEffect(() => {
        async function fetchCsrfToken() {
            const token = await getCsrfToken();
            setCsrfToken(token);
        }
        fetchCsrfToken();
    }, []);
    return(
        <div className="row">
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100 vw-100 gradient">
                <div className="mx-auto card shadow m-0 p-0 col-md-4 col-lg-3 ">
                    <div className="card-header bg-primary text-white text-center fw-bold w-100">Login</div>
                    <div className="card-body">
                        <div className="d-flex w-100">
                            <Image src="/Images/logo.svg" className="mx-auto" alt="Mehrabani" width={190} height={150} priority />
                        </div>
                        <form onSubmit={handleSubmit} className="p-4">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control border border-secondary" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control border border-secondary" id="password" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" name="remember" className="form-check-input border border-secondary" id="remember" />
                                <label className="form-check-label" htmlFor="remember">Remember me.</label>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                        { error && <div className="alert alert-danger" role="alert">{error}</div>}
                    </div>
                    <div className="card-footer text-muted text-center bg-light">
                        Don't have an account? <Link href="/signup" className="text-decoration-none text-primary"> Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
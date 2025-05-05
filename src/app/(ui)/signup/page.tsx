"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getCsrfToken } from "next-auth/react";
import { signUp } from "@/app/actions/signup"

interface register {
	error: [{}],
	succes: boolean,
	message:string
}

export default function Singup() {
	const [error, setError] = useState() as any;
	const [token, setToken] = useState("");
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		DoB: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setError({});

		try {
			const register = await signUp({
				...formData,
				csrfToken: token,
			});

			if(register.success){
				setError({success:{message: register.success}});
				return
			}

			if (register.error) {
				for (const err of register.error) {
					setError((prevError: any) => ({
						...prevError,
						[err.path]: err.message,
					}));
				}	
				return			
			}

			setError({failure:{message:"Something went wrogn, Please try agian later!"}})

		} catch (error) {
			setError({failure:{ message: "Registration failed." }});
		}
	};

	useEffect(() => {
		async function fetchCsrfToken() {
			const csrf = await getCsrfToken();
			setToken(csrf);
		}
		fetchCsrfToken();
	}, []);


	return (
		<div className="container-fluid d-flex justify-content-center align-items-center vh-100 vw-100 gradient">
			<div className="mx-auto card shadow m-0 p-0 col-md-8 col-lg-6 ">
				<div className="card-header bg-primary text-white text-center fw-bold w-100">Signup</div>
				<div className="card-body">
					<div className="row w-100 d-flex justify-content-center align-items-center">
						<div className="col-auto">
							<Image src="/Images/logo.svg" className="mx-auto" alt="Mehrabani" width={190} height={150} priority />
						</div>
						<div className="col">
							<form onSubmit={handleSubmit} className="row g-3 pb-4 " >
								<div className="w-100">
									<label htmlFor="firstName" className="form-label">First Name</label>
									<input type="text" name="firstName" className="form-control border border-secondary w-100" id="firstName"
										value={formData.firstName}
										onChange={handleChange}
										required />
									<div className="text-danger">{error?.firstName && error.firstName}</div>
								</div>

								<div className="w-100">
									<label htmlFor="lastName" className="form-label">Last Name</label>
									<input type="text" className="form-control border border-secondary w-100" name="lastName" id="lastName"
										value={formData.lastName}
										onChange={handleChange}
										required />
									{error?.lastName && <div className="text-danger">{error.lastName}</div>}
								</div>

								<div className="w-100">
									<label className="form-label" htmlFor="DoB">Date of Birth.</label>
									<div className="input-group">
										<input type="date" name="DoB" className="form-control border border-secondary w-100" id="DoB"
											value={formData.DoB}
											onChange={handleChange}
											required />
										{error?.DoB && <div className="text-danger">{error.DoB}</div>}
									</div>
								</div>
								<div className="w-100">
									<label htmlFor="email" className="form-label">Email address</label>
									<div className="input-group">
										<input type="email" name="email" className="form-control border border-secondary w-100" id="email"
											value={formData.email}
											onChange={handleChange}
											required />
										{error?.email && <div className="text-danger">{error.email}</div>}
									</div>
								</div>
								<div className="w-100">
									<label htmlFor="password" className="form-label">Password</label>
									<div className="input-group">
										<input type="password" name="password" className="form-control border border-secondary w-100" id="password"
											value={formData.password}
											onChange={handleChange}
											required />
										{error?.password && <div className="text-danger">{error.password}</div>}
									</div>
								</div>
								<div className="w-100">
									<button type="submit" className="btn btn-primary">Submit</button>
								</div>
							</form>
							{ error?.failure?.message && <div className="alert alert-danger" role="alert">{error?.failure?.message}</div>}
							{ error?.success?.message && <div className="alert alert-success" role="alert">{error?.success?.message}</div>}
						</div>
						<div className="card-footer text-muted text-center bg-light">
							<Link href="/login" className="text-decoration-none text-primary"><strong>Already have an account</strong></Link>
						</div>
					</div>
				</div>
			</div >
		</div >
	)
}
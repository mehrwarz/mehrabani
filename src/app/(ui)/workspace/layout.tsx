import Footer from "@/app/(ui)/components/footer"
import Header from "@/app/(ui)/components/header"
import Sidebar from "@/app/(ui)/components/sidebar"
import Link from "next/link"
import { NextRequest } from "next/server";

export default async function AppLayout({ children }: { children: React.ReactNode }) {

	const crumbs = {
		title: "Page Title Here",
		tabs: [
			{
				link: "#home",
				tab: "Home"
			},
			{
				link: "#about",
				tab: "About Us"
			},
			{
				link: "#contact",
				tab: "Contact"
			}
		]
	}

	return (
		<div className="row">
			<div className=" col-lg-2">
				<Sidebar />
			</div>
			<main className="col-auto w-100">
				<Header />
				
			</main>
		</div>
	)
}
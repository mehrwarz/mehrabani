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
        <>

            <Sidebar />

            <main className="main-wrapper">
                <Header />
                <section className="section">
				<div className="container-fluid">
					<div className="title-wrapper pt-30">
						<div className="row has-align-items-center">
							<div className="col-md-6">
								<div className="title">
									<h2> { crumbs.title }</h2>
								</div>
							</div>
							<div className="col-md-6">
								<div className="breadcrumb-wrapper">
									<nav aria-label="breadcrumb">
										<ol className="breadcrumb">
											{ crumbs.tabs.map((elm,index) => 
											(index+1) == crumbs.tabs.length?
												<li className="breadcrumb-item active" key={index}>
													{elm.tab}
												</li>:
											<li className="breadcrumb-item active" key={index}>
													<Link href={elm.link}>{elm.tab}</Link>
												</li>
											)}
										</ol>
									</nav>
								</div>
							</div>
						</div>
					</div>
                    {children}
				</div>
			</section>
                <Footer />
            </main>
        </>
    )
}
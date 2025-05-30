import Script from 'next/script';
import Footer from "../components/footer";
import MainHeader from "../components/mainHeader";
import Sidebar from "../components/sidebar";


export default async function WorkSpace({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Sidebar />
			<div className="main-panel">
				<MainHeader />
				<div className="container">
					<div className="page-inner">
						{children}
					</div>
				</div>
				<Footer />
			</div>
			<Script src="/assets/js/core/bootstrap.min.js"></Script>
		</div>
	)
}

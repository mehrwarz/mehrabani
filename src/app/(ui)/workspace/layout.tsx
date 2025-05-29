import Script from 'next/script';
import Footer from "../components/footer";
import MainHeader from "../components/mainHeader";
import Sidebar from "../components/sidebar";
import { cookies } from 'next/headers';


export default async function WorkSpace( { children }: { children: React.ReactNode } ) {
	   	const cookieStore = await cookies();
		const pageTitle = cookieStore.get("pageTitle") || ""
	return (
		<div>
						<Sidebar />
			<div className="main-panel">
				<MainHeader />
				<div className="container">
					<div className="page-inner">
						{ children}
					</div>
				</div>
				<Footer />
			</div>
			<Script src="/assets/js/core/jquery-3.7.1.min.js"></Script>
			<Script src="/assets/js/core/popper.min.js"></Script>
			<Script src="/assets/js/core/bootstrap.min.js"></Script>
			<Script src="/assets/js/plugin/jquery.sparkline/jquery.sparkline.min.js"></Script>
			<Script src="/assets/js/plugin/chart.js/chart.min.js"></Script>
			<Script src="/assets/js/plugin/chart-circle/circles.min.js"></Script>
			<Script src="/assets/js/plugin/datatables/datatables.min.js"></Script>
			<Script src="/assets/js/plugin/bootstrap-notify/bootstrap-notify.min.js"></Script>
			<Script src="/assets/js/plugin/jsvectormap/jsvectormap.min.js"></Script>
			<Script src="/assets/js/plugin/jsvectormap/world.js"></Script>
			<Script src="/assets/js/plugin/gmaps/gmaps.js"></Script>
			<Script src="/assets/js/plugin/sweetalert/sweetalert.min.js"></Script>
			<Script src="/assets/js/kaiadmin.min.js"></Script>
			<Script src="/assets/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js"></Script>
		</div>
	)
}

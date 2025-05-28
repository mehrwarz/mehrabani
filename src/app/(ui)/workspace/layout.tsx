import Script from "next/script";
import Footer from "../components/footer";
import MainHeader from "../components/mainHeader";
import Sidebar from "../components/sidebar";
import Breadcrumbs from "../components/breadcrumbs";
import "../../../../public/assets/css/fonts.min.css"
import { fontAwesomeBrands, fontAwesomeRegular, fontAwesomeSolid, simpleLineIcons,  } from "@/lib/fonts";

export default function Workspace({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (

		<div className={`wrapper ${fontAwesomeSolid.variable} ${fontAwesomeRegular.variable} ${fontAwesomeBrands.variable} ${simpleLineIcons.variable}`}>
			<Sidebar />
			<div className="main-panel">
				<MainHeader />
				<div className="container">
					<div className="page-inner">
						<Breadcrumbs params={{page: "Work space", url: "/workspace/profile/sdfghj"} } />
						<div className="page-category">{children}</div>
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

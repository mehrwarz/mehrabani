import Script from 'next/script';
import Footer from "../components/footer";
import MainHeader from "../components/mainHeader";
import Sidebar from "../components/sidebar";
import Breadcrumbs from "../components/breadcrumbs";
import { ReactNode } from 'react';

export default function WorkSpace( { children }: { children: React.ReactNode } ) {
	return (
		<div>
			<Script
				src="/assets/js/plugin/webfont/webfont.min.js"
				strategy="beforeInteractive" // Loads before React hydrate
			/>

			{/* Inline script for WebFont.load */}
			<Script
				id="webfont-loader" // Unique ID for the script
				strategy="lazyOnload" // Loads after the page becomes interactive
			>
				{`
          WebFont.load({
            google: { families: ["Public Sans:300,400,500,600,700"] },
            custom: {
              families: [
                "Font Awesome 5 Solid",
                "Font Awesome 5 Regular",
                "Font Awesome 5 Brands",
                "simple-line-icons",
              ],
              urls: ["/assets/css/fonts.min.css"], // Use public path
            },
            active: function () {
              sessionStorage.fonts = true;
            },
          });
        `}
			</Script>

			<Sidebar />
			<div className="main-panel">
				<MainHeader />
				<div className="container">
					<div className="page-inner">
						<Breadcrumbs title="Home" capitalize />
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

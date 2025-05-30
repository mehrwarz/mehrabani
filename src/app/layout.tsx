import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Mehrabani",
  description: "Where the hearts beats",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html data-theme="light" lang="en">
      <head>
      <meta charSet="UTF-8" />
      <title>{process.env.APP_NAME}</title>
        <Script
				src="/assets/js/plugin/webfont/webfont.min.js" strategy="beforeInteractive" />

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
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="http://localhost:3000/assets/images/favicon.svg" type="image/x-icon" />
        <link rel="stylesheet" href="http://localhost:3000/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="http://localhost:3000/assets/css/plugins.min.css" />
        <link rel="stylesheet" href="http://localhost:3000/assets/css/kaiadmin.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

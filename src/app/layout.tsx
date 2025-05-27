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
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="http://localhost:3000/assets/images/favicon.svg" type="image/x-icon" />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/lineicons.css" />
        <link rel="stylesheet" href="assets/css/materialdesignicons.min.css" />
        <link rel="stylesheet" href="assets/css/fullcalendar.css" />
        <link rel="stylesheet" href="assets/css/main.css" />
      </head>
      <body>
        {children}
        <Script src="assets/js/bootstrap.bundle.min.js"></Script>
        <Script src="assets/js/Chart.min.js"></Script>
        <Script src="assets/js/dynamic-pie-chart.js"></Script>
        <Script src="assets/js/moment.min.js"></Script>
        <Script src="assets/js/fullcalendar.js"></Script>
        <Script src="assets/js/jvectormap.min.js"></Script>
        <Script src="assets/js/world-merc.js"></Script>
        <Script src="assets/js/polyfill.js"></Script>
        <Script src="assets/js/main.js"></Script>
      </body>
    </html>
  );
}

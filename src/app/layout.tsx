import type { Metadata } from "next";
import "./globals.css";

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
        <link rel="shortcut icon" href="http://localhost:3000/assets/Images/favicon.svg" type="image/x-icon" />
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

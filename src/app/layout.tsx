import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{process.env.APP_NAME}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
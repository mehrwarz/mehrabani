import Script from 'next/script'
import './globals.css'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-100 w-100'>{children}</body>
      <Script defer src='/assets/bootstrap/bootstrap.bundle.min.js'></Script>
    </html>
  )
}
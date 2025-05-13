import { auth } from "@/lib/auth"
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export default auth((req:any) => {
    const isLogedIn = !!req.auth;

    console.log("Is loged in: ", isLogedIn)

  console.log("Route: ", req.nextUrl.pathname)
});

export async function middleware(request: NextRequest | any) {
  const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0] || request.ip;
  console.log('Client IP:', clientIp);
  return NextResponse.next();
}


export const config = {
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
    ],
  }
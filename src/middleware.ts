// middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const MAX_ATTEMPTS = 4;
const LOCKOUT_DURATION = 20 * 60 * 1000; // 1 hour in milliseconds
const CLEANUP_INTERVAL = 60 * 1000; // 1 minute (adjust as needed)
const IPsFilter = [] as any;

function cleanupLockouts() {
	IPsFilter.filter((IP: { lockoutUntil: Date; }) => IP.lockoutUntil > new Date());
}

// Start the cleanup interval
if (typeof window === 'undefined') { // Ensure this runs only on the server
	setInterval(cleanupLockouts, CLEANUP_INTERVAL);
}

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	// Rate limit login attempts
	if (pathname === "/login" || pathname === "/api/auth/signin/credentials") {
		// Get the client's IP address, considering potential proxies
		const xForwardedFor = request.headers.get('x-forwarded-for');
		const clientIp = xForwardedFor?.split(',')[0] || request.headers.get('remote-addr') || "Unknown IP"

		if (!IPsFilter[clientIp]) IPsFilter[clientIp] = { attempts: 0, lockoutUntil: 0 }


		if (IPsFilter[clientIp].lockoutUntil > new Date()) {
			const remaining = Math.ceil((IPsFilter[clientIp].lockoutUntil - Date.now()) / 1000 / 60);
			console.warn(`Login blocked for IP: ${clientIp} - Account temporarily locked. Remaining: ${remaining} minutes.`);

			return NextResponse.json({ error: `Account temporarily locked. Please try again after ${remaining} minutes.` }, { status: 429 }); // Too Many Requests
		}

		IPsFilter[clientIp].attempts++;

		if (IPsFilter[clientIp].attempts > MAX_ATTEMPTS) {
			console.warn(`Login lockout triggered for IP: ${clientIp} after ${MAX_ATTEMPTS} failed attempts.`);
			IPsFilter[clientIp].lockoutUntil = new Date(Date.now() + LOCKOUT_DURATION)
			IPsFilter[clientIp].attempts = 0;
			return NextResponse.json({ error: { message: 'Account temporarily locked due to too many failed attempts. Please try again in an hour.' } }, { status: 429 }); // Too Many Requests
		}
	}


	return NextResponse.next();
}

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		// Always run for API routes
		'/(api|trpc)(.*)',
	],
};
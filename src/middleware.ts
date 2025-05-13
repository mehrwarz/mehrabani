// middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// In-memory store for rate limiting (replace with Redis or similar for production)
const loginAttemptsByIp = new Map<string, number>();
const lockoutUntilByIp = new Map<string, Date>();
const MAX_ATTEMPTS = 3;
const LOCKOUT_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
const CLEANUP_INTERVAL = 60 * 1000; // 1 minute (adjust as needed)

function cleanupLockouts() {
    const now = new Date();
    for (const [ip, lockoutTime] of lockoutUntilByIp.entries()) {
        if (lockoutTime <= now) {
            lockoutUntilByIp.delete(ip);
        }
    }
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
		const clientIp = xForwardedFor?.split(',')[0] || request.headers.get('remote-addr') || 'UNKNOWN';

		const lockoutUntil = lockoutUntilByIp.get(clientIp);
		if (lockoutUntil && lockoutUntil > new Date()) {
			const remaining = Math.ceil((lockoutUntil.getTime() - Date.now()) / 1000 / 60);
			console.warn(`Login blocked for IP: ${clientIp} - Account temporarily locked. Remaining: ${remaining} minutes.`);
			return NextResponse.json({ error: `Account temporarily locked. Please try again after ${remaining} minutes.` }, { status: 429 }); // Too Many Requests
		}

		const attempts = loginAttemptsByIp.get(clientIp) || 0;
		loginAttemptsByIp.set(clientIp, attempts + 1);

		if (attempts + 1 > MAX_ATTEMPTS) {
			console.warn(`Login lockout triggered for IP: ${clientIp} after ${MAX_ATTEMPTS} failed attempts.`);
			lockoutUntilByIp.set(clientIp, new Date(Date.now() + LOCKOUT_DURATION));
			loginAttemptsByIp.delete(clientIp); // Reset attempts after lockout
			return NextResponse.json( { error:{ message: 'Account temporarily locked due to too many failed attempts. Please try again in an hour.' }}, { status: 429 }); // Too Many Requests
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
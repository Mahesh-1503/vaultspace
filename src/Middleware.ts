import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/better-auth/auth";

type Session = typeof auth.$Infer.Session;

export async function middleware(request: NextRequest) {
    try {
        const { data: session } = await axios.get<Session>("/api/auth/get-session", {
            baseURL: request.nextUrl.origin,
            headers: {
                cookie: request.headers.get("cookie") || "",
            },
        });

        if (!session) {
            const signInUrl = new URL("/sign-in", request.url);
            signInUrl.searchParams.set("callbackUrl", request.url);
            return NextResponse.redirect(signInUrl);
        }

        return NextResponse.next();
    } catch (error) {
        console.error("Middleware error:", error);
        return NextResponse.redirect(new URL("/error", request.url));
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
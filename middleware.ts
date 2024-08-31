import { NextRequest, NextResponse } from "next/server";

// https://ja.next-community-docs.dev/docs/app-router/building-your-application/routing/middleware
export function middleware(request: NextRequest) {
    // TODO: 認証処理をここで検証
    const isAuthenticated = true // authenticate(request)

    if (isAuthenticated) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/', request.url)) // TODO: /login
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/article/:path*'
    ],
}

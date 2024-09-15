import { NextRequest, NextResponse } from 'next/server';
import { unauthorized } from './shared/types/httpResponse';

// https://ja.next-community-docs.dev/docs/app-router/building-your-application/routing/middleware
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ルートごとに異なる処理を実行
  if (pathname.startsWith('/api')) {
    // /api ルートの処理
    return handleApiRoute(request);
  }
  if (pathname.startsWith('/admin')) {
    // /admin ルートの処理
    return handleAdminRoute(request);
  }

  // その他のルートに対する処理
  return NextResponse.next();
}

function handleApiRoute(request: NextRequest) {
  // API ルートの処理
  const authHeader = request.headers.get('api_token');
  console.log('🚀 ~ handleApiRoute ~ authHeader:', authHeader);
  console.log(process.env.APP_API_TOKEN);

  if (!authHeader || authHeader !== process.env.APP_API_TOKEN) {
    return NextResponse.json(unauthorized, { status: 401 });
  }
}

function handleAdminRoute(request: NextRequest) {
  // TODO: 認証状態をここで検証
  const isAuthenticated = true; // authenticate(request)

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url)); // TODO: /login
  }
}

export const config = {
  matcher: [
    '/api/:path*',
    '/dashboard/:path*',
    '/article/:path*'
  ],
};

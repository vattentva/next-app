import { NextRequest, NextResponse } from 'next/server';
import { unauthorized } from './shared/types/httpResponse';
import { getToken } from 'next-auth/jwt';

// 認証が不要なパスのリスト
const publicPaths = [
  '/login',
  '/terms',
  '/privacy',
  '/api/auth'
];

// https://ja.next-community-docs.dev/docs/app-router/building-your-application/routing/middleware
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;  
  
  // 公開パスの場合はミドルウェアをスキップ
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // 認証チェック
  const token = await getToken({ req: request });
  if (!token) {    
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // ルートごとに異なる処理を実行
  if (pathname.startsWith('/api')) {
    // return handleApiRoute(request);
  }

  // その他のルートに対する処理
  return NextResponse.next();
}

function handleApiRoute(request: NextRequest) {
  // API ルートの処理
  const authHeader = request.headers.get('api_token');

  if (!authHeader || authHeader !== process.env.APP_API_TOKEN) {
    return NextResponse.json(unauthorized, {
      status: 401,
      headers: {
        'Cache-Control': 'no-store',
        'CDN-Cache-Control': 'no-store',
        'Vercel-CDN-Cache-Control': 'no-store'
      },
    });
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

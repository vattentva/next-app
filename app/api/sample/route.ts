import { UserInfo } from '@/domain/models/Sample';
import { NextRequest, NextResponse } from 'next/server';

function getInfo(request: NextRequest): UserInfo {
  const { origin, pathname, search, searchParams } = new URL(request.url);
    
  return {
    request: { origin, pathname, search },
    method: request.method,
    userAgent: request.headers.get('user-agent') || 'Unknown',
    currentTime: new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }),
  };
}

export async function GET(request: NextRequest): Promise<Response> {
  return Response.json(getInfo(request), {
    status: 200,
    // headers: {
    //   'Cache-Control': 'no-store',
    //   'CDN-Cache-Control': 'no-store',
    //   'Vercel-CDN-Cache-Control': 'no-store'
    // },
  });
}

export async function POST(request: NextRequest): Promise<Response> {    
  return Response.json(getInfo(request));
}
  
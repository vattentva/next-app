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
  return Response.json(getInfo(request));
}

export async function POST(request: NextRequest) {    
  return Response.json(getInfo(request));
}
  
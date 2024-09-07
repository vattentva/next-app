import { UserInfo } from '@/domain/models/Sample';

function getInfo(request: Request): UserInfo {
  const { origin, pathname, search, searchParams } = new URL(request.url);
    
  return {
    request: { origin, pathname, search },
    method: request.method,
    userAgent: request.headers.get('user-agent') || 'Unknown',
    currentTime: new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }),
  };
}

export async function GET(request: Request): Promise<Response> {
  console.log(getInfo(request));
    
  return Response.json(getInfo(request));
}

export async function POST(request: Request) {    
  return Response.json(getInfo(request));
}
  
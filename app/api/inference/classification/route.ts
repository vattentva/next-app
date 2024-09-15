import { getClassificationData } from '@/infrastructure/api/getClassificationData';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<Response> {
  const res = await getClassificationData();
  return NextResponse.json(res);
}
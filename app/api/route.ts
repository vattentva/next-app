import { NextRequest, NextResponse } from 'next/server';

// https://ja.next-community-docs.dev/docs/app-router/building-your-application/routing/route-handlers

export async function GET(request: NextRequest) {
  return NextResponse.json({ status: 200 });
}

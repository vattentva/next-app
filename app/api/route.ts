import { NextRequest, NextResponse } from 'next/server';

// https://ja.next-community-docs.dev/docs/app-router/building-your-application/routing/route-handlers

export async function GET(request: NextRequest) {
  let data = await fetch('https://api.github.com/users/leerob');
  let json = await data.json();
  return NextResponse.json({ status: 200, data: json });
}

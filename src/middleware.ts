import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Admin dashboard - rewrite to admin/index.html
  if (pathname.startsWith('/admin')) {
    return NextResponse.rewrite(new URL('/admin/index.html', request.url))
  }

  // Sanity Studio - rewrite to studio/index.html  
  if (pathname.startsWith('/studio')) {
    return NextResponse.rewrite(new URL('/studio/index.html', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/studio/:path*'],
}

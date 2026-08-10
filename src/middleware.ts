import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Admin dashboard
  if (pathname.startsWith('/admin')) {
    const adminUrl = new URL('/admin/index.html', request.url)
    return NextResponse.rewrite(adminUrl)
  }

  // Sanity Studio
  if (pathname.startsWith('/studio')) {
    const studioUrl = new URL('/studio/index.html', request.url)
    return NextResponse.rewrite(studioUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/studio/:path*'],
}

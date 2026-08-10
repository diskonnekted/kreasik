import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Don't rewrite static assets (CSS, JS, images, fonts, etc.)
  const staticExtensions = /\.(css|js|json|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|map)$/i
  if (staticExtensions.test(pathname)) {
    return NextResponse.next()
  }

  // Also don't rewrite if it's inside assets directory
  if (pathname.includes('/assets/')) {
    return NextResponse.next()
  }

  // Admin dashboard - rewrite to admin/index.html (only for routes that don't match files)
  if (pathname.startsWith('/admin')) {
    return NextResponse.rewrite(new URL('/admin/index.html', request.url))
  }

  // Sanity Studio - rewrite to studio/index.html (only for routes that don't match files)
  if (pathname.startsWith('/studio')) {
    return NextResponse.rewrite(new URL('/studio/index.html', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/studio/:path*'],
}

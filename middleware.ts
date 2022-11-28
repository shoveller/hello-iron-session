import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = async (request: NextRequest) => {
  const res = NextResponse.next();
  console.log('api 미들웨어가 동작한다')

  return res
}

export const config = {
  matcher: '/about/:path*',
}


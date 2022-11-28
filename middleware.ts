import {getIronSession} from "iron-session/edge";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 3. 세션 객체를 확장하도록 구현이 되어있으므로 선언을 확장[s]
declare module 'iron-session' {
  interface IronSessionData {
    importantData?: {
      id: string
    }
  }
}
// 3. 세션 객체를 확장하도록 구현이 되어있으므로 선언을 확장[e]

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  // 1. 세션을 생성하는 함수를 적용[s]
  const session = await getIronSession(req,  res, {
    cookieName: 'iron-session-using-middleware',
    password: '암호는32글자이상이어야한다고암호는32글자이상이어야한다고암호는32글자이상이어야한다고',
    cookieOptions: {
      httpOnly: true
    }
  })
  // 1. 세션을 생성하는 함수를 적용[s]

  if (session?.importantData) {
    // 4. 중요한 데이터를 세션에서 가져와 활용[s]
    console.log(session.importantData);
    // 4. 중요한 데이터를 세션에서 가져와 활용[e]
  } else {
    // 2. 중요한 데이터를 세션에 담아 저장[s]
    session.importantData = {
      id: '중요한 데이터'
    }
    await session.save()
    // 2. 중요한 데이터를 세션에 담아 저장[e]
  }

  return res
}

export const config = {
  matcher: '/hey',
}


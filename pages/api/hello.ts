import {withIronSessionApiRoute} from "iron-session/next";
import type {NextApiHandler} from 'next'

type Data = {
  name: string
}

// 3. 세션 객체를 확장하도록 구현이 되어있으므로 선언을 확장[s]
declare module 'iron-session' {
  interface IronSessionData {
    importantData?: {
      id: string
    }
  }
}
// 3. 세션 객체를 확장하도록 구현이 되어있으므로 선언을 확장[e]

const handler: NextApiHandler<Data> = async (
  req,
  res
) => {
  if (req.session.importantData) {
    // 4. 중요한 데이터를 세션에서 가져와 활용[s]
    console.log(req.session.importantData);
    // 4. 중요한 데이터를 세션에서 가져와 활용[e]
  } else {
    // 2. 중요한 데이터를 세션에 담아 저장[s]
    req.session.importantData = {
      id: '중요한 데이터'
    }
    await req.session.save()
    // 2. 중요한 데이터를 세션에 담아 저장[e]
  }

  res.status(200).json({ name: 'John Doe' })
}

// 1. 세션을 생성하는 hoc를 적용[s]
export default withIronSessionApiRoute(handler, {
  cookieName: 'iron-session',
  password: '암호는32글자이상이어야한다고암호는32글자이상이어야한다고암호는32글자이상이어야한다고',
  cookieOptions: {
    httpOnly: true
  }
})
// 1. 세션을 생성하는 hoc를 적용[e]

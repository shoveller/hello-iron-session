import {NextApiHandler} from "next";

type Data = {
  name: string
}

const hey: NextApiHandler<Data> = async (req, res) => {
  console.log(req.session);
  res.status(200).json({ name: 'John Doe' })
}

export default hey

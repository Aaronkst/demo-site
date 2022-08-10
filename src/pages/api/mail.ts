// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { defaultMail } from "../../services/mail";
import { Status } from "../../constants";

type IData = {
  status: Status.success;
  name: string;
};

type IError = {
  status: Status.error;
  error: any;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IData | IError>
) => {
  if (req.method === "POST") {
    try {
      const data = await defaultMail();
      return res.status(200).json({ status: Status.success, name: data });
    } catch (err) {
      return res.status(500).send({ status: Status.error, error: err });
    }
  }
  return res
    .status(405)
    .send({ status: Status.error, error: "Method Not Allowed" });
};

export default handler;

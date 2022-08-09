// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Status } from "../../constants";

type IData = {
  status: Status.success;
  name: string;
};

type IError = {
  status: Status.error;
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData | IError>
) {
  if (req.method === "POST") {
    if (!req.headers.authorization) {
      return res
        .status(401)
        .send({ status: Status.error, error: "Unauthorized" });
    }
    return res.status(200).json({ status: Status.success, name: "John Doe" });
  }
  return res
    .status(405)
    .send({ status: Status.error, error: "Method Not Allowed" });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const dict = {
  metode: 'GET',
  status: 'Aman',
};

const anjas = {
  metode:'POST',
  status: 'Aman'
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof dict>
) {
  if (req.method === "GET") {
    res.status(200).json(dict);
  } else if (req.method === "POST") {
    res.status(201).json(anjas);
  }
}

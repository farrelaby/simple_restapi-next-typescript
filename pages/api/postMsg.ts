import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const err = {
  msg: "ERROR",
};

async function postAbsen(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);
  try {
    const newAdd = await prisma.absen.create({
      data: {
        nama: body.nama,
        niu: body.niu,
      },
    });
    return res.status(200).json(newAdd);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "error reading from database" });
  }
}

async function postMsg(req: NextApiRequest, res: NextApiResponse) {
  // console.log(req.body);
  if (req.method === "POST") {
    return await postAbsen(req, res);
  } else {
    res.status(404).json(err);
  }
}

export default postMsg;

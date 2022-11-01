import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const err = {
  msg: "Method not allowed",
};

async function postAbsen(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    console.log(body);
    const newAdd = await prisma.absen.create({
      data: {
        nama: body.nama,
        niu: Number(body.niu),
      },
    });
    return res.status(200).json(newAdd);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "error reading from database",
    });
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

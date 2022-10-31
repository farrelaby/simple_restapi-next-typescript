import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const err = {
  msg: "Method not allowed",
};

async function delAbsen(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const delabsen = await prisma.absen.delete({
      where: {
        id: body.id,
      },
    });
    return res.status(200).json({ delabsen });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({
        error: "error reading from database",
        format: "body diisi nama & niu ya :)",
      });
  }
}

async function delMsg(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    return await delAbsen(req, res);
  } else {
    res.status(404).json(err);
  }
}

export default delMsg;

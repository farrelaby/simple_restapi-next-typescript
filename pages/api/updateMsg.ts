import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const err = {
  msg: 'Method not allowed',
};

async function updateAbsen(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const updabsen = await prisma.absen.update({
      where: {
        id: body.id,
      },
      data: {
        nama: body.nama,
      },
    });
    return res.status(200).json({ updabsen });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'error reading from database' });
  }
}

async function updMsg(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PATCH') {
    return await updateAbsen(req, res);
  } else {
    res.status(404).json(err);
  }
}

export default updMsg;

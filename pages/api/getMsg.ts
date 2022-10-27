import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const err = {
  msg: 'Method not allowed',
};

async function getAbsen(req: NextApiRequest, res: NextApiResponse) {
  try {
    const allabsen = await prisma.absen.findMany();
    return res.status(200).json(allabsen);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'error reading from database' });
  }
}

async function getAbsenhandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return await getAbsen(req, res);
  } else {
    res.status(404).json(err);
  }
}

export default getAbsenhandler;

import type { NextApiRequest, NextApiResponse } from 'next';

const get = {
  method: 'GET',
  msg: 'Success',
};

const err = {
  msg: 'ERROR',
};

function getMsg(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(get);
  } else {
    res.status(404).json(err);
  }
}

export default getMsg;

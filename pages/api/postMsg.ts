import type { NextApiRequest, NextApiResponse } from 'next';

const post = {
  method: 'POST',
  msg: 'OK',
};

const err = {
  msg: 'ERROR',
};

function postMsg(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.status(200).json(post);
  } else {
    res.status(404).json(err);
  }
}

export default postMsg;

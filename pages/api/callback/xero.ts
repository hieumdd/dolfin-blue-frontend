import type { NextApiRequest, NextApiResponse } from 'next';

import dayjs from 'dayjs';
import Cookies from 'cookies';

import { client } from '../../../providers/xero';

const xeroCallback = (req: NextApiRequest, res: NextApiResponse) => {
    const cookies = new Cookies(req, res);

    client
        .apiCallback(<string>req.url)
        .then((token) => {
            console.log(token);
            cookies.set('xeroToken', JSON.stringify(token), {
                expires: dayjs()
                    .add(<number>token.expires_at, 'second')
                    .toDate(),
                secure: false,
            });
            res.redirect(307, '/');
        })
        .catch((err) => res.status(500).json({ err }));
};

export default xeroCallback

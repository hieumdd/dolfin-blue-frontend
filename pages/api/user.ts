import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import UserService from '../../feature/user/user.service';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) {
        res.status(403).json({ err: 'Forbidden' });
        return;
    }

    const userService = new UserService();

    switch (req.method) {
        case 'GET':
            userService.get().then((users) => res.json({ users }));
            break;
        case 'PUT':
            console.log(req.body)
            userService
                .update(req.body)
                .then((result) => res.json(result));
            break;
        default:
            res.status(405).end();
            break;
    }
};

export default handler;

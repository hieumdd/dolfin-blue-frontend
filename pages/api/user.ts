import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import UserService from '../../feature/user/user.service';

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) {
        res.status(403).json({ err: 'Forbidden' });
        return;
    }

    const userService = new UserService();

    userService.get().then((users) => res.json({ users }));
};

export default getUsers;

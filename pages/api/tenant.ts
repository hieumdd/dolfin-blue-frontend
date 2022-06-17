import { NextApiRequest, NextApiResponse } from 'next';

import { getSession } from 'next-auth/react';

import { client } from '../../providers/xero';

const getTenant = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) {
        res.status(403).json({ err: 'Forbidden' });
        return;
    }
    client.setTokenSet({ access_token: <string>session.accessToken });
    await client.updateTenants();

    const { tenants } = client;
    const tenant = tenants.pop();
    res.json({ tenant });
    return;
};

export default getTenant;

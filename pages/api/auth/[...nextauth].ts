import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth/next';

import { client } from '../../../providers/xero';

const nextAuth = async (req: NextApiRequest, res: NextApiResponse) =>
    client.buildConsentUrl().then((authorization) =>
        NextAuth(req, res, {
            secret: '123',
            site: process.env.NEXTAUTH_URL,
            providers: [
                {
                    id: 'xero',
                    name: 'Xero',
                    type: 'oauth',
                    clientId: client.config?.clientId,
                    clientSecret: client.config?.clientSecret,
                    authorization,
                    token: 'https://identity.xero.com/connect/token',
                    userinfo: {
                        // @ts-expect-error
                        request: () => {},
                    },
                },
            ],
            callbacks: {
                redirect: async({url, baseUrl}) => {
                    console.log({ url, baseUrl });
                    // return `${baseUrl}`;
                    return Promise.resolve(`https://google.com`);
                },
            },
        }),
    );

export default nextAuth;

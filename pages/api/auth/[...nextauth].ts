import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth/next';

import { client, getCodeCallbackUrl } from '../../../providers/xero';

const nextAuth = async (req: NextApiRequest, res: NextApiResponse) =>
    client.buildConsentUrl().then((authorization) =>
        NextAuth(req, res, {
            secret: '123',
            debug: false,
            providers: [
                {
                    id: 'xero',
                    name: 'Xero',
                    type: 'oauth',
                    clientId: client.config?.clientId,
                    clientSecret: client.config?.clientSecret,
                    authorization,
                    token: {
                        async request(context) {
                            const url = getCodeCallbackUrl(
                                <string>context.params.code,
                            );
                            const tokens = await client.apiCallback(url);
                            return { tokens };
                        },
                    },
                    idToken: true,
                    async profile(profile) {
                        return {
                            id: profile.xero_userid,
                            email: profile.email,
                        };
                    },
                },
            ],
            callbacks: {
                async jwt({ token, account }) {
                    if (account) {
                        token.accessToken = account.access_token;
                    }
                    return token;
                },
                session({ session, token }) {
                    session.accessToken = token.accessToken
                    return session;
                },
            },
            pages: {
                signIn: '/',
            },
        }),
    );

export default nextAuth;

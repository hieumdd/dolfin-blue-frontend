import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth/next';
import { EventCallbacks, TokenSet } from 'next-auth';

import { xero, getCodeCallbackUrl } from '../../../providers/xero';
import UserService from '../../../feature/user/user.service';

const createUser: EventCallbacks['signIn'] = async ({ user, account }) => {
    xero.setTokenSet(account);
    await xero.updateTenants();

    const userService = new UserService();

    await userService.set({
        id: user.id,
        email: <string>user.email,
        tokens: <TokenSet>account,
        tenants: xero.tenants.map(({ tenantId, tenantName }) => ({
            id: tenantId,
            name: tenantName,
        })),
    });
};

const nextAuth = async (req: NextApiRequest, res: NextApiResponse) =>
    xero.buildConsentUrl().then((authorization) =>
        NextAuth(req, res, {
            debug: false,
            providers: [
                {
                    id: 'xero',
                    name: 'Xero',
                    type: 'oauth',
                    clientId: xero.config?.clientId,
                    clientSecret: xero.config?.clientSecret,
                    authorization,
                    token: {
                        async request(context) {
                            const url = getCodeCallbackUrl(
                                <string>context.params.code,
                            );
                            const tokens = await xero.apiCallback(url);
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
                    session.accessToken = token.accessToken;
                    return session;
                },
            },
            jwt: {
                maxAge: 60 * 60 * 24 * 30,
            },
            events: {
                signIn: createUser,
            },
            pages: {
                signIn: '/',
            },
        }),
    );

export default nextAuth;

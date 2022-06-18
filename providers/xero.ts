import { XeroClient } from 'xero-node';

const redirectUri = 'http://localhost:3000/api/auth/callback/xero';
const callbackUrl = '';

export const xero = new XeroClient({
    clientId: process.env.XERO_CLIENT_ID || '',
    clientSecret: process.env.XERO_CLIENT_SECRET || '',
    redirectUris: [redirectUri],
    scopes: [
        'openid',
        'email',
        'offline_access',
        'assets.read',
        'accounting.settings.read',
        'accounting.journals.read',
        'accounting.budgets.read',
        'accounting.reports.read',
        'accounting.transactions.read',
        'accounting.contacts.read',
    ],
});

export const getCodeCallbackUrl = (code: string) => {
    const url = new URL('http://localhost:3000/api/auth/callback/xero');
    url.searchParams.append('code', code);
    return url.toString();
};

import { XeroClient } from 'xero-node';

export const client = new XeroClient({
    clientId: process.env.XERO_CLIENT_ID || '',
    clientSecret: process.env.XERO_CLIENT_SECRET || '',
    redirectUris: ['http://localhost:3000/api/auth/callback/xero'],
    scopes: [
        'assets.read',
        'accounting.settings.read',
        'accounting.journals.read',
        'accounting.budgets.read',
        'accounting.reports.read',
        'accounting.transactions.read',
        'accounting.contacts.read',
    ],
});

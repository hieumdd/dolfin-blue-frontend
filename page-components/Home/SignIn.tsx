import { FC } from 'react';
import { signIn } from 'next-auth/react';

import { Button } from '@chakra-ui/react';

const SignIn: FC = () => (
    <Button onClick={() => signIn('xero', { callbackUrl: '/' })}>
        Sign in with Xero
    </Button>
);

export default SignIn;

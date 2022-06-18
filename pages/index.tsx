import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

import { VStack } from '@chakra-ui/react';
import SessionInfo from '../page-components/Home/SessionInfo';
import SignIn from '../page-components/Home/SignIn';

const Home: NextPage = () => {
    const { data: session } = useSession();

    return (
        <VStack w="full" alignItems="stretch">
            {session && <SessionInfo email={session.user?.email as string} />}
            <SignIn />
        </VStack>
    );
};

export default Home;

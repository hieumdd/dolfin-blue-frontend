import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { VStack } from '@chakra-ui/react';

import requestApi from '../libs/api';
import SessionInfo from '../page-components/Home/SessionInfo';
import SignIn from '../page-components/Home/SignIn';
import Users from '../page-components/Home/Users';

import { User } from '../feature/user/user.entity';
const Home: NextPage = () => {
    const [users, setUsers] = useState<User[]>([]);

    const { data: session } = useSession();

    useEffect(() => {
        requestApi({ method: 'GET', url: '/user' }).then(({ users }) =>
            setUsers(users),
        );
    });

    return (
        <VStack w="full" alignItems="stretch">
            {session && <SessionInfo email={session.user?.email as string} />}
            <Users users={users} />
            <SignIn />
        </VStack>
    );
};

export default Home;

import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { VStack } from '@chakra-ui/react';

import requestApi from '../libs/api';
import SessionInfo from '../page-components/Home/SessionInfo';
import SignIn from '../page-components/Home/SignIn';
import Users from '../page-components/Home/Users';

import { User, Tenant } from '../feature/user/user.entity';

const Home: NextPage = () => {
    const [users, setUsers] = useState<User[]>([]);

    const { data: session } = useSession();

    const getUsers = () => {
        requestApi<{ users: User[] }>({ method: 'GET', url: '/user' }).then(
            ({ users }) =>
                setUsers(users.filter(({ tenants }) => tenants.length > 0)),
        );
    };

    useEffect(getUsers);

    const handleRemove =
        (userId: User['id']) => (tenantId: Tenant['id']) => () => {
            const user = users.find(({ id }) => id === userId) as User;
            requestApi<User>({
                method: 'PUT',
                url: '/user',
                data: {
                    ...user,
                    tenants: user.tenants.filter(({ id }) => id !== tenantId),
                },
            }).then(getUsers);
        };

    return (
        <VStack w="full" alignItems="stretch">
            {session && <SessionInfo email={session.user?.email as string} />}
            {users.length > 0 && (
                <Users users={users} handleRemove={handleRemove} />
            )}
            <SignIn />
        </VStack>
    );
};

export default Home;

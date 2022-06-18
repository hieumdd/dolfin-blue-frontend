import { FC } from 'react';
import { Accordion } from '@chakra-ui/react';

import { User as UserProps } from '../../../feature/user/user.entity';
import User from './User';

const Users: FC<{ users: UserProps[] }> = ({ users }) => (
    <Accordion allowMultiple borderWidth="1px">
        {users.map((user) => (
            <User key={user.id} {...user} />
        ))}
    </Accordion>
);

export default Users;

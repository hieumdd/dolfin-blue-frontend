import { FC } from 'react';
import { Accordion } from '@chakra-ui/react';

import { User as UserProps } from '../../../feature/user/user.entity';
import User, { UserHandleRemove } from './User';

type UsersProps = {
    users: UserProps[];
    handleRemove: (id: UserProps['id']) => UserHandleRemove;
};

const Users: FC<UsersProps> = ({ users, handleRemove }) => (
    <Accordion allowMultiple borderWidth="1px">
        {users.map((user) => (
            <User
                key={user.id}
                {...user}
                handleRemove={handleRemove(user.id)}
            />
        ))}
    </Accordion>
);

export default Users;

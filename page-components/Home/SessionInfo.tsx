import { FC } from 'react';
import { HStack, IconButton, Icon, Text } from '@chakra-ui/react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

import { signOut } from 'next-auth/react';

type SessionInfoProps = {
    email: string;
};

const SessionInfo: FC<SessionInfoProps> = ({ email }) => (
    <HStack justifyContent="space-between">
        <Icon as={FaUser} />
        <Text>{email}</Text>
        <IconButton
            aria-label=""
            icon={<FaSignOutAlt />}
            onClick={() => signOut()}
        />
    </HStack>
);

export default SessionInfo;

import { FC } from 'react';
import { HStack, Center, IconButton, Icon, Text } from '@chakra-ui/react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

import { signOut } from 'next-auth/react';

type SessionInfoProps = {
    email: string;
};

const SessionInfo: FC<SessionInfoProps> = ({ email }) => (
    <HStack justifyContent="space-between">
        <Center p={3}>
            <Icon as={FaUser} fontSize="md" />
        </Center>
        <Text>{email}</Text>
        <IconButton
            aria-label=""
            icon={<FaSignOutAlt />}
            onClick={() => signOut()}
        />
    </HStack>
);

export default SessionInfo;

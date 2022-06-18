import { FC } from 'react';
import { HStack, IconButton, Text } from '@chakra-ui/react';

import { FaRegTimesCircle } from 'react-icons/fa';

import { Tenant } from '../../../feature/user/user.entity';

const Tenant: FC<Tenant> = ({ id, name }) => (
    <HStack justifyContent="space-around">
        <Text flex="1">{name}</Text>
        <IconButton aria-label="remove" icon={<FaRegTimesCircle />} />
    </HStack>
);

export default Tenant;

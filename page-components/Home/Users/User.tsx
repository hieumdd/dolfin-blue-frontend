import { FC } from 'react';
import {
    VStack,
    StackDivider,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react';

import { User } from '../../../feature/user/user.entity';
import Tenant from './Tenant';

const User: FC<User> = ({ id, email, tenants }) => (
    <AccordionItem>
        <AccordionButton>
            <Box >{email}</Box>
            <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
            <VStack spacing={1} alignItems="stretch" divider={<StackDivider />}>
                {tenants.map((tenant) => (
                    <Tenant key={tenant.id} {...tenant} />
                ))}
            </VStack>
        </AccordionPanel>
    </AccordionItem>
);

export default User;

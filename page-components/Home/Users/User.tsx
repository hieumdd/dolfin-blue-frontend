import { FC } from 'react';
import {
    VStack,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react';

import { User, Tenant as TenantProps } from '../../../feature/user/user.entity';
import Tenant, { TenantHandleRemove } from './Tenant';

export type UserHandleRemove = (id: TenantProps['id']) => TenantHandleRemove;

type UserProps = User & {
    handleRemove: UserHandleRemove;
};

const User: FC<UserProps> = ({ email, tenants, handleRemove }) => {
    return (
        <AccordionItem>
            <AccordionButton justifyContent="space-between">
                <Box fontWeight="bold">{email}</Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel py={2}>
                <VStack spacing={2} alignItems="stretch">
                    {tenants.map((tenant) => (
                        <Tenant
                            key={tenant.id}
                            {...tenant}
                            handleRemove={handleRemove(tenant.id)}
                        />
                    ))}
                </VStack>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default User;

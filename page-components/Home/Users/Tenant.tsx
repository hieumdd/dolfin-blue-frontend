import { FC, useState } from 'react';
import { HStack, IconButton, Text } from '@chakra-ui/react';

import { FaRegTimesCircle } from 'react-icons/fa';

import { Tenant } from '../../../feature/user/user.entity';

export type TenantHandleRemove = () => void;

type TenantProps = Tenant & {
    handleRemove: TenantHandleRemove;
};

const Tenant: FC<TenantProps> = ({ name, handleRemove }) => {
    const [loading, setLoading] = useState(false);

    return (
        <HStack justifyContent="space-around">
            <Text flex="1">{name}</Text>
            <IconButton
                isLoading={loading}
                aria-label="remove"
                icon={<FaRegTimesCircle />}
                onClick={() => {
                    setLoading(true);
                    handleRemove();
                }}
            />
        </HStack>
    );
};

export default Tenant;

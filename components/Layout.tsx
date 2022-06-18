import { FC, PropsWithChildren } from 'react';

import { Container } from '@chakra-ui/react';

const Layout: FC<PropsWithChildren> = ({ children }) => (
    <Container maxW="container.sm" mt="10vh">
        {children}
    </Container>
);

export default Layout;

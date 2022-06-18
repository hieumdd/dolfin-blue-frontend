import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../styles/theme';
import Layout from '../components/Layout';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
    <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    </ChakraProvider>
);

export default App;

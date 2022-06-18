import type { NextPage, GetStaticProps } from 'next';
import { signIn, useSession } from 'next-auth/react';

import { xero } from '../providers/xero';

type HomePageProps = {
    url: string;
};

const Home: NextPage<HomePageProps> = ({ url }) => {
    const { data } = useSession();

    console.log(data);

    const handleLogin = () =>
        signIn('xero', { redirect: false, callbackUrl: '/' });
    return (
        <>
            <div>{JSON.stringify(data)}</div>
            <button onClick={handleLogin}>{url}</button>
        </>
    );
};

export const getStaticProps: GetStaticProps<HomePageProps> = () =>
    xero.buildConsentUrl().then((url) => ({ props: { url } }));

export default Home;

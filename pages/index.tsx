import type { NextPage, GetStaticProps } from 'next';
import { useSession } from 'next-auth/react';

import { client } from '../providers/xero';

type HomePageProps = {
    url: string;
};

const Home: NextPage<HomePageProps> = ({ url }) => {
    const { data } = useSession();

    console.log(data);
    return <a href={url}>{url}</a>;
};

export const getStaticProps: GetStaticProps<HomePageProps> = () =>
    client.buildConsentUrl().then((url) => ({ props: { url } }));

export default Home;

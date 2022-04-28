import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../components/ContextProvider';

// Use require instead of import since order matters
require('antd/dist/antd.dark.less');
require('@tomlisankie/wallet-adapter-ant-design/styles.css');
require('@tomlisankie/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>@tomlisankie/wallet-adapter Example</title>
            </Head>
            <ContextProvider>
                <Component {...pageProps} />
            </ContextProvider>
        </>
    );
};

export default App;

import { lazy, Suspense } from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';

const LazyComponent = lazy(() => import('../components/Layout'));

function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Suspense>
  );
}

export default MyApp;

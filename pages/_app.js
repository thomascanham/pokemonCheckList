import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';
import pokemon from 'pokemontcgsdk';
import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import { pokemonAPIKEY } from '../config';
import '../styles/nprogress.css';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  pokemon.configure({
    apiKey: pokemonAPIKEY,
  });
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  apollo: PropTypes.any,
};

export default withData(MyApp);

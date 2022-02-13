import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';
import pokemon from 'pokemontcgsdk';
import Page from '../components/Page';
import '../styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  pokemon.configure({
    apiKey: '79e5802c-a8a2-43f9-9c0d-e3c2df58e264',
  });
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
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
};

export default MyApp;

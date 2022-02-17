import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    html {
        --primary-color: #302AE6;
        --secondary-color: #536390;
        --font-color: #424242;
        --bg-color: #fff;
        --heading-color: #292922;

        --box-shadow: rgb(224, 224, 224) 0px 2px 8px 0px;
        box-sizing: border-box;
        font-size: 16px;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
    body {
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1rem;
        line-height: 2;
        background: var(--bg-color);
    }
    h1, h2, h3, h4, h5, h6 {
        color: var(--heading-color);
        font-weight: 400;
        line-height: 1.3;
    }
    h1 {
        margin-top: 0;
        font-size: 3.052rem;
    }

    h2 {font-size: 2.441rem;}

    h3 {font-size: 1.953rem;}

    h4 {font-size: 1.563rem;}

    h5 {font-size: 1.25rem;}
    p {
        color: var(--font-color);
    }

    .container {
      width: 95%;
      max-width: 1000px;
      margin: 0 auto;
    }
`;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import config from '../utils/config';
import Header from './Header';
import './layout.css';
import './Footer';
import Footer from './Footer';

const Container = styled.div`
  background-color: White;
`;

const IndexLayout = ({ children }) => (
  <div>
    <Helmet>
      <title>{config.siteName}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta description={config.description} />
    </Helmet>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </div>
);

IndexLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default IndexLayout;

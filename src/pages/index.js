import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import FirstSection from '../components/FirstSection';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <FirstSection />
      </Layout>
    );
  }
}

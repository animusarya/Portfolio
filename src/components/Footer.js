import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const Container = styled.div`
  font-family: sans-serif;
  background-color: #242424;
  .columns {
    margin: 0rem !important;
  }
  .icon {
    margin-right: 6px;
    width: 36px;
    height: 33px;
    background-color: white;
    padding: 7px;
    border-radius: 32px;
    :hover {
      background-color: #827bfc !important;
      color: white !important;
    }
  }
  h4 {
    margin-top: 1rem;
    font-family: sans-serif;
  }
  .para {
    padding: 0rem 3rem 0rem 3rem;
  }
  .para1 {
    padding: 0rem 6rem 0rem 5rem;
  }
`;
const FooterQuery = graphql`
  query {
    allContentfulFooter {
      edges {
        node {
          tittle
          subtittle
        }
      }
    }
  }
`;

const Footer = () => (
  <Container className="has-text-centered">
    <div className="columns">
      <StaticQuery
        query={FooterQuery}
        render={data => (
          <div className="column">
            <h4 className="has-text-white is-size-5 is-uppercase">
              {data.allContentfulFooter.edges[0].node.tittle}
            </h4>
            <p className="para has-text-white is-size-6">
              {data.allContentfulFooter.edges[0].node.subtittle}
            </p>
          </div>
        )}
      />
      <div className="column">
        <h4 className="has-text-white is-size-5 is-uppercase">Connect</h4>
        <div className="">
          <i className="fab fa-facebook-f is-size-4 has-text-black icon" />
          <i className="fab fa-google-plus-g is-size-4 has-text-black icon" />
          <i className="fab fa-twitter is-size-4 has-text-black icon" />
          <i className="fab fa-behance is-size-4 has-text-black icon" />
        </div>
      </div>
      <StaticQuery
        query={FooterQuery}
        render={data => (
          <div className="column">
            <h4 className="has-text-white is-size-5 is-uppercase">
              {' '}
              {data.allContentfulFooter.edges[1].node.tittle}
            </h4>
            <p className="para1 has-text-white is-size-6">
              {data.allContentfulFooter.edges[1].node.subtittle}
            </p>
          </div>
        )}
      />
    </div>
  </Container>
);

export default Footer;

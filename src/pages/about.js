import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';

const Container = styled.div`
  font-family: sans-serif;
  background-color: #f5f5f5;
  margin-top: 53px;
  .subtitle {
    font-family: sans-serif;
    margin-top: 7%;
  }
  .para {
    font-family: cursive;
    margin-top: 4%;
  }
`;

const Button = styled.button`
  margin-left: 0%;
  border: 1px solid black;
  font-family: cursive;
`;

const ImageHome = styled.img`
  width: 57%;
  margin-left: 11%;
  height: 57%;
  margin-top: 8%;
`;

const ImageHomeTwo = styled.img`
  width: 57%;
  z-index: 300;
  margin-top: -30%;
  margin-left: 28%;
`;

const aboutQuery = graphql`
  query {
    allContentfulAbout {
      edges {
        node {
          header
          paragraph {
            paragraph
          }
        }
      }
    }
  }
`;

const about = () => (
  <Layout>
    <Container className="section has-background-white">
      <div className="container">
        <div className="columns is-gapless">
          <StaticQuery
            query={aboutQuery}
            render={data => (
              <div className="column">
                <h1 className="subtitle is-size-4 has-text-black">
                  {data.allContentfulAbout.edges[0].node.header}
                </h1>
                <p className="para is-size-6 has-text-black-darker">
                  {' '}
                  {data.allContentfulAbout.edges[0].node.paragraph.paragraph}
                </p>
                <Button className="button">Learn More</Button>
              </div>
            )}
          />
          <div className="column">
            <ImageHome
              src="/images/first.jpg"
              className="Image"
              alt="back-to-top"
            />
            <ImageHomeTwo
              src="/images/second.jpg"
              className="Image"
              alt="back-to-top"
            />
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);
export default about;

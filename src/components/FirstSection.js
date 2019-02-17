import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const Container = styled.div`
  font-family: sans-serif;
  background-color: #f5f5f5;
  padding: 8%;
  .container {
    margin-top: 5rem;
  }
  .para {
    color: #6a6a6a;
  }
  h1,
  h2,
  p {
    font-family: sans-serif;
    padding: 0rem 33rem 0rem 0rem;
  }
`;

const firstQuery = graphql`
  query {
    contentfulFirstSection {
      header
      title
      paragraph {
        paragraph
      }
      image {
        file {
          url
        }
      }
    }
  }
`;

const FirstSection = () => (
  <Container className="">
    <div className="columns">
      <StaticQuery
        query={firstQuery}
        render={data => (
          <React.Fragment>
            <div className="column is-three-fifths has-text-left">
              <div className="container">
                <h1 className="title is-size-3 has-text-black">
                  {data.contentfulFirstSection.header}
                </h1>
                <h2 className="title is-size-3 has-text-black">
                  {data.contentfulFirstSection.title}
                </h2>
                <p className="para is-size-7">
                  {data.contentfulFirstSection.paragraph.paragraph}
                </p>
              </div>
            </div>
            <div className="column">
              <img src={data.contentfulFirstSection.image.file.url} />
            </div>
          </React.Fragment>
        )}
      />
    </div>
  </Container>
);

export default FirstSection;

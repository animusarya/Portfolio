import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Layout from "./Layout";

const Container = styled.div`
  .title {
    font-family: fantasy;
    :hover {
      width: 249px;
      border-bottom: 3px solid #f56a6a;
    }
`;

const Image = styled.img`
  border-radius: 11px !important;
  width: 40%;
  :hover {
    width: 50%;
    border-bottom-color: #f56a6a;
    color: #f56a6a !important;
  }
  @media screen and (max-width: 600px) {
    margin-top: 13% !important;
  }
`;

const Gallery = styled.div``;

const MoreButton = styled.button`
  width: 119px;
  color: #f56a6a !important;
  font-size: 17px!important;
  height: 49px;
  border: 0px solid #f56a6a;
  border-radius: 0.375em;
  font-family: "Roboto Slab", serif;
  box-shadow: inset 0 0 0 2px #f56a6a;
}
  :hover {
    background-color:  #f56a6a;
    color: #fff!important;
  }
}`;

const BlogQuery = graphql`
  query {
    allContentfulBlog {
      edges {
        node {
          title
          subtittle
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

const Sectiontwo = () => (
  <Layout>
    <Container className="">
      <h1 className="title is-size-3 has-text-weight-bold">Ipsum sed dolor</h1>
      <Gallery className="columns is-gapless">
        <StaticQuery
          query={BlogQuery}
          render={data => {
            const { edges } = data.allContentfulBlog;
            return (
              <React.Fragment>
                {edges.map(blog => (
                  <div className="column has-text-centered has-background-grey-lighter">
                    <a href="">
                      <Image src={blog.node.image.file.url} />
                    </a>
                    <div className="content">
                      <h1 className="is-size-4 has-text-black-darker">
                        {blog.node.title}
                      </h1>
                      <p className="is-size-6 has-text-grey">
                        {blog.node.subtittle}
                      </p>
                    </div>
                    <MoreButton className="button is-medium has-text-weight-semibold">
                      MORE
                    </MoreButton>
                  </div>
                ))}
              </React.Fragment>
            );
          }}
        />
      </Gallery>
    </Container>
  </Layout>
);

export default Sectiontwo;

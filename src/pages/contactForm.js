import React from 'react';
import styled from 'styled-components';

import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';

const Container = styled.div`
  padding: 7rem 1.5rem;
  @media screen and (max-width: 600px) {
    margin-top: 232%;
    height: 1232px !important;
  }
`;

const From = styled.div`
  font-family: sans-serif;
  margin-left: 2rem;
  .control {
    width: !important;
    border: 1px solid groove !important;
  }
  .field {
    margin-top: 12px;
  }
  .input
    border-color: black !important;
  }
  .button {
    margin-top: 2%;
    border-radius: 21px;
    height: 47px !important;
    width: 230px;
    font-size: 15px !important;
  .icon {
    margin-left: 12px !important;
    font-size: 10px;
  }
`;

const ContactFormQuery = graphql`
  query {
    contentfulContactForm {
      title
      subtittle {
        subtittle
      }
      contactimage {
        file {
          url
        }
      }
    }
  }
`;

const contactForm = () => (
  <Layout>
    <StaticQuery
      query={ContactFormQuery}
      render={data => (
        <React.Fragment>
          <Container className=" has-background-light">
            <div className="columns">
              <div className="column">
                <img src={data.contentfulContactForm.contactimage.file.url} />
              </div>
              <div className="column is-centered">
                <From>
                  <h1 className="title has-text-left-mobile">
                    {data.contentfulContactForm.title}
                  </h1>
                  <p className="is-size-7 has-text-grey has-text-centered-mobile">
                    {data.contentfulContactForm.subtittle.subtittle}
                  </p>
                  <div className="control">
                    <input
                      className="input is-size-6"
                      type="your name"
                      placeholder="your name"
                    />
                  </div>
                  <div className="field">
                    <p className="control">
                      <input
                        className="input is-size-6"
                        type="email"
                        placeholder=" Enter Email address"
                      />
                    </p>
                  </div>
                  <div className="field">
                    <div className="control">
                      <textarea className="textarea" placeholder="Message" />
                    </div>
                  </div>
                  <a className="button is-pulled-right is-size-6">
                    CONFIRM BOOKING <i className="icon fas fa-arrow-right" />
                  </a>
                </From>
              </div>
            </div>
          </Container>
        </React.Fragment>
      )}
    />
  </Layout>
);

export default contactForm;

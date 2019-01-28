import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: sans-serif;
  background-color: #242424;
  .columns {
    margin: 0rem !important;
    margin-top: 1.625rem !important;
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
`;

const Footer = () => (
  <Container className="has-text-centered">
    <div className="columns">
      <div className="column">
        <h4 className="has-text-white is-size-5 is-uppercase">Address</h4>
        <p className="has-text-white is-size-6">123 Sility, South Corner Street,<br />Melbornem Australia.</p>
      </div>
      <div className="column">
        <h4 className="has-text-white is-size-5 is-uppercase">Connect</h4>
        <div className="">
          <i className="fab fa-facebook-f is-size-4 has-text-black icon" />
          <i className="fab fa-google-plus-g is-size-4 has-text-black icon" />
          <i className="fab fa-twitter is-size-4 has-text-black icon" />
          <i className="fab fa-behance is-size-4 has-text-black icon" />
        </div>
      </div>
      <div className="column">
        <h4 className="has-text-white is-size-5 is-uppercase">Contact</h4>
        <p className="has-text-white is-size-6">Tel: +61 123-456-7890<br />Mail: Sility@example.com</p>
      </div>
    </div>
  </Container>
);

export default Footer;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: sans-serif;
  background-color:#f5f5f5;
  padding: 8%;
  .container {
    margin-top: 5rem;
  }
  .para {
    color: #6a6a6a;
  }
`;

const FirstSection = () => (
  <Container className="">
    <div className="columns">
      <div className="column is-three-fifths has-text-left">
        <div className="container">
          <h1 className="title is-size-3 has-text-black">
         Design+Develope+
          </h1>
          <h2 className="title is-size-3 has-text-black">
        Interactive+Develope+Art
          </h2>
          <p className="para is-size-7">Hello, I’m Benjamin Thomson. I Have 8 years of experience in Web and UX design. I am worked on a<br /> variety of brands and with agencies both big and small.</p>
        </div>
      </div>
      <div className="column">
        <img
          src="images/dp.jpg"
        />
      </div>
    </div>
  </Container>
);

export default FirstSection;

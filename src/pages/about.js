import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
  width: 100% !important;
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
  height: 73%;
`;

const ImageHomeTwo = styled.img`
  width: 57%;
  z-index: 300;
  margin-top: -30%;
  margin-left: 28%;
`;

const about = () => (
  <Layout>
    <Container className="section has-background-white">
      <div className="container">
        <div className="columns is-gapless">
          <div className="column">
            <h1 className="subtitle is-size-4 has-text-black">
              About Our Resturent
            </h1>
            <p className="para is-size-6 has-text-black-darker">
              {' '}
              The is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been <br />
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley
              <br />
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting,
              <br />
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset
              <br />
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software
              <br />
              like Aldus sheets PageMaker in Ipsum passages including versions
              of Lorem Ips sheets
              <br />
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software
              <br />
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software
              <br />
            </p>
            <Button className="button">Learn More</Button>
          </div>
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

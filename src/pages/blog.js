import React from 'react';
import styled from 'styled-components';
import SectionTwo from '../components/SectionTwo';

const Container = styled.div`
  width: 100% !important;
`;

const blog = () => (
  <Container className="section has-background-light">
    <SectionTwo />
  </Container>
);
export default blog;

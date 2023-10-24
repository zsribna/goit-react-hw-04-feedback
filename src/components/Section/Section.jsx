import React from 'react'
import { Title,  Container } from './Section.Styled';


export const Section = ({title, children}) => {
  return (
    <Container >
      <Title >{title}</Title>
      {children}
    </Container>
  );
}

import React from 'react';
import CarList from './src/components/car-list/CarList.component';
import Header from './src/components/header/Header.component';
import styled from 'styled-components/native';

export default function App() {
  return (
    <StyledContainer>
      <CarList />
      <Header />
    </StyledContainer>
  );
}

const StyledContainer = styled.View`
  flex: 1;
`;

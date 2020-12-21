import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import Car from '../car/Car.component';
import { carData, TCarData } from './../../../assets/cars';

const CarList = () => {
  return (
    <StyledView>
      <FlatList
        data={carData}
        keyExtractor={(item: TCarData) => {
          return item.name;
        }}
        renderItem={({ item }) => <Car car={item} />}
      />
    </StyledView>
  );
};

export default CarList;

const StyledView = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
`;

import React from 'react';
import {
  StyledSubText,
  StyledText,
  StyledCarContainer,
  StyledBackgroundImage,
} from './Car.styles';

const Car = () => {
  return (
    <StyledCarContainer>
      <StyledBackgroundImage
        resizeMode='cover'
        source={require('../../../assets/ModelS.jpeg')}
      >
        <StyledText>Model S</StyledText>
        <StyledSubText>Starting at $46,040</StyledSubText>
      </StyledBackgroundImage>
    </StyledCarContainer>
  );
};

export default Car;

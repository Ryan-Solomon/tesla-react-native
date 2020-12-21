import React from 'react';
import {
  StyledSubText,
  StyledText,
  StyledCarContainer,
  StyledBackgroundImage,
  StyledButton,
  StyledButtonText,
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

        <StyledButton>
          <StyledButtonText>Custom Order</StyledButtonText>
        </StyledButton>
        <StyledButton backgroundColor='#fff'>
          <StyledButtonText color='#333'>Existing Inventory</StyledButtonText>
        </StyledButton>
      </StyledBackgroundImage>
    </StyledCarContainer>
  );
};

export default Car;

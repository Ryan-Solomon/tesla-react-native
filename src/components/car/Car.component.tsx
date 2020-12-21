import React from 'react';
import {
  StyledSubText,
  StyledText,
  StyledCarContainer,
  StyledBackgroundImage,
  StyledButton,
  StyledButtonText,
  StyledButtonContainer,
  StyledTitlesContainer,
} from './Car.styles';

const Car = () => {
  return (
    <StyledCarContainer>
      <StyledBackgroundImage
        resizeMode='cover'
        source={require('../../../assets/ModelS.jpeg')}
      >
        <StyledTitlesContainer>
          <StyledText>Model S</StyledText>
          <StyledSubText>Starting at $46,040</StyledSubText>
        </StyledTitlesContainer>
        <StyledButtonContainer>
          <StyledButton>
            <StyledButtonText>Custom Order</StyledButtonText>
          </StyledButton>
          <StyledButton backgroundColor='#fff'>
            <StyledButtonText color='#333'>Existing Inventory</StyledButtonText>
          </StyledButton>
        </StyledButtonContainer>
      </StyledBackgroundImage>
    </StyledCarContainer>
  );
};

export default Car;

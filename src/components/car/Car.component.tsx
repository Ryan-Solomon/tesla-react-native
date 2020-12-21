import React from 'react';
import { ImageSourcePropType } from 'react-native';
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
import { carData } from '../../../assets/cars';

const Car = () => {
  const { image, name, tagline, taglineCTA } = carData[0];

  return (
    <StyledCarContainer>
      <StyledBackgroundImage
        resizeMode='cover'
        source={image as ImageSourcePropType}
      >
        <StyledTitlesContainer>
          <StyledText>{name}</StyledText>
          <StyledSubText>{tagline}</StyledSubText>
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

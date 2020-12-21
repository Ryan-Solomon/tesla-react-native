import React, { FC } from 'react';
import { ImageSourcePropType, useWindowDimensions, View } from 'react-native';
import {
  StyledSubText,
  StyledText,
  StyledBackgroundImage,
  StyledButton,
  StyledButtonText,
  StyledButtonContainer,
  StyledTitlesContainer,
} from './Car.styles';
import { carData, TCarData } from '../../../assets/cars';

type TProps = {
  car: TCarData;
};

const Car: FC<TProps> = ({ car }) => {
  const { image, name, tagline } = car;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={{ height: windowHeight }}>
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
    </View>
  );
};

export default Car;

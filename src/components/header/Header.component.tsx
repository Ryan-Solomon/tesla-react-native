import React from 'react';
import { StyledHeaderContainer, StyledLogo, StyledMenu } from './Header.styles';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledLogo
        style={{ resizeMode: 'contain' }}
        source={require('../../../assets/logo.png')}
      />
      <StyledMenu
        style={{ resizeMode: 'contain' }}
        source={require('../../../assets/menu.png')}
      />
    </StyledHeaderContainer>
  );
};

export default Header;

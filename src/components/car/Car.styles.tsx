import styled from 'styled-components/native';

export const StyledBackgroundImage = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  /* height: 100%; */
`;

export const StyledTitlesContainer = styled.View`
  align-items: center;
  margin-top: 100px;
`;

export const StyledButtonContainer = styled.View`
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const StyledText = styled.Text`
  font-size: 24px;
  color: #333;
`;

export const StyledSubText = styled.Text`
  font-size: 12px;
  margin-top: 10px;
  color: #5f5f5f;
`;

type TButtonProps = {
  backgroundColor: string;
};

export const StyledButton = styled.TouchableOpacity<Partial<TButtonProps>>`
  width: 90%;
  padding: 10px;
  background: ${({ backgroundColor }) => backgroundColor || '#333'};
  border-radius: 25px;
  margin-bottom: 12px;
`;

type TButtonText = {
  color: string;
  fontSize: string;
};

export const StyledButtonText = styled.Text<Partial<TButtonText>>`
  color: ${({ color }) => color || '#fff'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  padding: 1px;
  text-align: center;
`;

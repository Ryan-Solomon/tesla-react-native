import styled from 'styled-components/native';

export const StyledBackgroundImage = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

export const StyledText = styled.Text`
  font-size: 24px;
  margin-top: 100px;
  color: #333;
`;

export const StyledSubText = styled.Text`
  font-size: 12px;
  margin-top: 10px;
  color: #5f5f5f;
`;

export const StyledCarContainer = styled.View`
  flex: 1;
`;

type TButtonProps = {
  backgroundColor: string;
};

export const StyledButton = styled.TouchableOpacity<Partial<TButtonProps>>`
  width: 90%;
  padding: 10px;
  background: ${({ backgroundColor }) => backgroundColor || '#333'};
  border-radius: 25px;
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

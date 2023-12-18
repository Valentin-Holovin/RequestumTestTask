import { styled } from "styled-components/native";
import { Colors } from "./Colors";
import { FontSizes } from "./Typography";
import { Spaces } from "./Spaces";
import { isIOS } from "../helpers";
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ButtonContainerProps {
  primary?: boolean | ((value: boolean) => void);
};

interface TextInputProps {
  isFocused: boolean | ((value: boolean) => void);
  isSecure?: boolean | ((value: boolean) => void);
};

export const ButtonContainer = styled(TouchableOpacity)<ButtonContainerProps>`
  background-color: ${({ primary }) => (primary ? Colors.gray02 : Colors.pink)};
  height: 50px;
  border-radius: 8px;
  align-items: center;
  overflow: hidden;

  ${!isIOS
    ? 'elevation: 8;'
    : `
      shadowColor: ${Colors.black};
      shadowOffset: { width: 0, height: 4 };
      shadowOpacity: 0.3;
      shadowRadius: 4;
    `}
`;

export const ButtonText = styled.Text`
  color: ${Colors.white};
  font-size: ${FontSizes.md}px;
  font-weight: 700;
  margin-top: ${Spaces.sm}px;
  font-family: Montserrat;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  position: relative;
  height: 50px;
  border-radius: ${Spaces.xs}px;
  border-color: ${({ isFocused }) => (isFocused ? Colors.pink : Colors.gray)};
  border-width: 1px;
  padding-left: ${Spaces['4xl']}px;
  padding-right: ${({ isSecure }) => (isSecure ? `${Spaces["4xl"]}px` : `${Spaces["2xl"]}px`)};
  padding-top: ${Spaces.lg}px;
  color: ${Colors.white};
  font-weight: 700;
  font-size: ${FontSizes.xs}px;
`;
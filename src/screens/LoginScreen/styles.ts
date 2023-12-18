import styled from "styled-components/native";
import { Colors, FontSizes, Spaces } from '../../themeProvider'

export const Container = styled.View`
  background-color: ${Colors.gray01};
  display: flex;
  flex: 1;
`;

export const Wrapper = styled.View`
  display: flex;
  margin: 0px 35px 0px 35px;
  justify-content: center;
  flex: 0.8;
`;

export const ImageWrapper = styled.View`
  margin-left: auto;
  margin-bottom: 30px;
`;

export const ImageBlock = styled.View`
  margin: 0px 40px 20px 0px
`;

export const FormWrapper = styled.View`
  margin-top: 72px
`;

export const TitleText = styled.Text`
  font-size: ${FontSizes.lg}px;
  font-weight: 600;
  color: ${Colors.white};
  text-align: center;
  font-family: Montserrat;
`;

export const Text = styled.Text`
  font-size: ${FontSizes.xs}px;
  color: ${Colors.gray};
  margin-top: ${Spaces.xs}px;
  text-align: center;
  font-family: Montserrat;
`;

export const FormBlock = styled.View`
  margin-top: ${Spaces.xs}px;
`;

export const InputWrapper = styled.View`
  margin-top: ${Spaces.md}px;
`;

export const LinkButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const Link = styled.Text`
  margin: 16px 0px 0px 16px;
  text-decoration: underline;
  color: ${Colors.red};
  font-size: ${Spaces.sm}px;
  font-family: Montserrat;
`;

export const ButtonWrapper = styled.View`
  margin-top: 16px;
`;

export const Footer = styled.TouchableOpacity`
  align-items: center;
  margin-top: ${Spaces['8xl']}px
`;

export const FooterText = styled.Text`
  font-size: ${FontSizes.xs}px;
  color: ${Colors.white};
  font-family: Montserrat;
`;

export const TextError = styled.Text`
  margin-top: 6px;
  margin-left: ${Spaces.md}px;
  font-size: 11px;
  color: ${Colors.red};
  font-family: Montserrat;
`;

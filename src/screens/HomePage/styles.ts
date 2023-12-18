import styled from "styled-components/native";
import { Colors, Spaces } from '../../themeProvider'

export const Container = styled.View`
  background-color: ${Colors.gray01};
  display: flex;
  flex: 1;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
`;

export const Block = styled.View`
  flex: 1;
  justify-content: space-evenly;
`

export const LetterImage = styled.ImageBackground`
  position: absolute;
  top: 50px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 400px;
`;

export const Wrapper = styled.View`
  margin: 0px 35px 0px 35px;
  flex: 0.8;
`;

export const TextWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 280px
`;

export const YouEnteredText = styled.Text`
  font-size: 11px;
  color: ${Colors.gray};
  font-family: Montserrat;
`;

export const UserTitleText = styled.Text`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  color: ${Colors.white};
  font-family: Montserrat;
  margin-top: ${Spaces.xs}px;
`;

export const InfoText = styled.Text`
  font-family: Montserrat;
  font-size: ${Spaces.md}px;
  font-weight: 500;
  color: ${Colors.white};
  font-family: Montserrat;
  margin-top: ${Spaces["5xl"]}px;
`;

export const ButtonWrapper = styled.View`
  margin: 0px 35px 135px 35px;
`;


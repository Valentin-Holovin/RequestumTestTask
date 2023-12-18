import styled from "styled-components/native";
import { Colors } from "../../themeProvider";

export const Container = styled.View`
  background-color: ${Colors.gray01};
  display: flex;
  flex: 1;
`;

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-around;
`;

export const ImageWrapper = styled.View`
  align-items: center;
  justify-content: center;
  text-align: center
`;

export const Image = styled.Image`
  width: 104px;
  height: 111.06px;
`;

export const ButtonWrapper = styled.View`
  margin: 0px 35px 0px 35px
`;

export const ButtonBlock = styled.View`
  margin-top: 15px
`;
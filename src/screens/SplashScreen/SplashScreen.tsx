import { ImageBackground } from 'react-native'
import React from 'react'
import { ButtonBlock, ButtonWrapper, Container, Image, ImageWrapper, Wrapper } from './styles';
import { Button } from '../../components';
import { useData } from './useData';

export const SplashScreen = () => {

  const background = require('../../assets/images/background.png')
  const logo = require('../../assets/images/logo.png')

  const {
    goToLogin,
    goToSignUp
  } = useData();

  return (
    <Container>
       <ImageBackground source={background} style={{ flex: 1 }}>
          <Wrapper>
            <ImageWrapper>
              <Image source={logo} />
            </ImageWrapper>

            <ButtonWrapper>
              <ButtonBlock>
                <Button 
                  title='Login' 
                  onPress={goToLogin}
                />
              </ButtonBlock>
              <ButtonBlock>
                <Button 
                  title='Register' 
                  onPress={goToSignUp}
                  primary 
                />
              </ButtonBlock>
            </ButtonWrapper>

          </Wrapper>
       </ImageBackground>
    </Container>
  )
}

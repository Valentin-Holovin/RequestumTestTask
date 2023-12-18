import React from 'react'
import { 
  Container, 
  BackgroundImage, 
  LetterImage, 
  Wrapper, 
  TextWrapper, 
  YouEnteredText, 
  UserTitleText, 
  InfoText, 
  ButtonWrapper,
  Block,
} from './styles'
import { ActivityIndicator, Button } from '../../components';
import { useData } from './useData';

export const HomeScreen = () => {

  const background = require('../../assets/images/background.png')
  const letter_r = require('../../assets/images/letter_r.png')

  const { 
    handleLogOut,
    loading,
    email,
    user
  } = useData();

  console.log(email)

  return (
    <Container>
      <BackgroundImage source={background}>
        <LetterImage source={letter_r} />
        
        <ActivityIndicator isVisible={loading} />

          <Block>
            <Wrapper>
              
              <TextWrapper>
                <YouEnteredText>You’re loggen in now</YouEnteredText>
                <UserTitleText>{email || user?.email}</UserTitleText>
                <InfoText>Now you can see the app content!</InfoText>
              </TextWrapper>

            </Wrapper>

            <ButtonWrapper>
              <Button 
                title='Log out' 
                onPress={handleLogOut}
              />
            </ButtonWrapper>
          </Block>
      </BackgroundImage>
    </Container>
  )
}

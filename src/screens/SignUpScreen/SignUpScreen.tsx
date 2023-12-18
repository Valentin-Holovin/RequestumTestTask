import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Header, Input } from '../../components';
import { ImageBackground } from 'react-native';
import { AuthIcon, EyeIcon } from '../../assets';
import { EmailIcon } from '../../assets/EmailIcon';
import { LockIcon } from '../../assets';
import {
  Container,
  ButtonWrapper,
  Footer,
  FooterText,
  FormBlock,
  FormWrapper,
  ImageBlock,
  ImageWrapper,
  InputWrapper,
  Link,
  Text,
  TitleText,
  Wrapper,
  TextError,
} from './styles';
import { useData } from './useData';

export const SignUpScreen = () => {

  const background = require('../../assets/images/background.png')

  const { 
    email,
    password, 
    setEmail, 
    setPassword,
    goToLogin,
    handleSignUp,
    loading,
    emailError,
    passwordError,
    validateEmail,
    validatePassword,
    setEmailError,
    setPasswordError
   } = useData();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
        <Container>
          <ImageBackground source={background} style={{ flex: 1 }}>
            <Header isBackButton />

            <Wrapper>
              
              <FormWrapper>
                <ImageWrapper>
                  <ImageBlock>
                    <AuthIcon />
                  </ImageBlock>
                </ImageWrapper>

                <TitleText>Sign Up</TitleText>
                <Text>Create your email and  password for your account</Text>

                <FormBlock>
                  <InputWrapper>
                    <Input 
                      placeholder="Email" 
                      icon={<EmailIcon />} 
                      value={email}
                      onChangeText={(text) => {
                        setEmail(text);
                        setEmailError('')
                      }}
                      onBlur={() => validateEmail()}
                    />
                    {emailError && <TextError>{emailError}</TextError>}
                  </InputWrapper>

                  <InputWrapper>
                    <Input 
                      placeholder="Password" 
                      icon={<LockIcon />} 
                      secureIcon={<EyeIcon />}
                      secureTextEntry
                      value={password}
                      onChangeText={(text) => {
                        setPassword(text);
                        setPasswordError('')
                      }}
                      onBlur={() => validatePassword()}
                    />
                    {passwordError && <TextError>{passwordError}</TextError>}
                  </InputWrapper>
                </FormBlock>

                <ButtonWrapper>
                  <Button 
                    title="Sign Up" 
                    onPress={handleSignUp}
                    isLoading={loading}
                    disabled={!email || !password}
                    hasError={!!emailError || !!passwordError}
                  />
                </ButtonWrapper>
              </FormWrapper>

              <Footer>
                <FooterText
                  onPress={goToLogin}
                >
                  Already have an account? <Link>Log in</Link>
                </FooterText>
              </Footer>
            </Wrapper>
        </ImageBackground>
        </Container>
    </KeyboardAwareScrollView>
  );
};

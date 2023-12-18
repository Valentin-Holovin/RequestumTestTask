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
  LinkButton,
  Text,
  TitleText,
  Wrapper,
  TextError
} from './styles';
import { useData } from './useData';

export const LoginScreen = () => {

  const background = require('../../assets/images/background.png')

  const { 
    email,
    password, 
    setEmail, 
    setPassword,
    goToSignUp,
    handleLogin,
    emailError,
    loading,
    passwordError,
    setEmailError,
    setPasswordError,
    validateEmail,
    validatePassword
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

                <TitleText>LOGIN</TitleText>
                <Text>Enter your login password from your account</Text>

                <FormBlock>
                  <InputWrapper>
                    <Input 
                      placeholder="Email" 
                      icon={<EmailIcon />} 
                      value={email}
                      onChangeText={(text) => {
                        setEmail(text)
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
                        setPassword(text)
                        setPasswordError('')
                      }}
                      onBlur={() => validatePassword()}
                    />
                    {passwordError && <TextError>{passwordError}</TextError>}
                  </InputWrapper>
                </FormBlock>

                <LinkButton>
                  <Link>Forgot password</Link>
                </LinkButton>

                <ButtonWrapper>
                  <Button 
                    title="Login" 
                    onPress={handleLogin}
                    isLoading={loading}
                    disabled={!email || !password}
                    hasError={!!emailError || !!passwordError}
                  />
                </ButtonWrapper>
              </FormWrapper>

              <Footer>
                <FooterText
                  onPress={goToSignUp}
                >
                  Don't have an account? <Link>Sign up</Link>
                </FooterText>
              </Footer>
            </Wrapper>
        </ImageBackground>
        </Container>
    </KeyboardAwareScrollView>
  );
};

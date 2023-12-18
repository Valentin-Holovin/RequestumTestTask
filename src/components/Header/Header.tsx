import React from 'react'
import { BackButtonIcon } from '../../assets'
import { styled } from 'styled-components/native';
import { Spaces } from '../../themeProvider';
import { goBack } from '../../navigation/NavigationService';

interface Props {
  isBackButton: boolean;
}

const Container = styled.SafeAreaView`
  margin-left: ${Spaces.xl}px;
`;

const BackButton = styled.TouchableOpacity`
  margin-top: ${Spaces['6xl']}px;
`

export const Header: React.FC<Props> = ({
  isBackButton
}) => {

  return (
    <Container>
      {isBackButton && (
        <BackButton
          onPress={goBack}
        >
          <BackButtonIcon width={24} height={24}/>
        </BackButton>
      )}
    </Container>
  )
}

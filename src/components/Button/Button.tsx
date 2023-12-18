import React, { useEffect, useRef } from 'react'
import { ButtonContainer, ButtonText, Colors } from '../../themeProvider';
import { ActivityIndicator, View, Animated } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    onLongPress?: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    primary?: boolean;
    hasError?: boolean;
}

export const Button:React.FC<Props> = ({
    title,
    onPress,
    onLongPress,
    isLoading,
    disabled,
    primary,
    hasError
}) => {

  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (hasError) {
      Animated.sequence([
        Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true }),
      ]).start();
    }
  }, [hasError, shakeAnimation]);

  const animatedStyle = {
    transform: [{ translateX: shakeAnimation }],
  };

  return (
    <ButtonContainer
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={isLoading || disabled}
        primary={primary}
        style={[animatedStyle]}
    >
        {isLoading 
          ?
          <View style={{ marginTop: 13 }}>
            <ActivityIndicator size='small' color={Colors.white} />
          </View>
          :
          <ButtonText>{title}</ButtonText>
        }
    </ButtonContainer>
  )
}

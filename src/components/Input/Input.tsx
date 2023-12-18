import React, { useState, useEffect } from 'react';
import { View, Animated, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { Colors, Spaces, TextInput } from '../../themeProvider';

interface Props extends TextInputProps {
  placeholder?: string;
  icon?: JSX.Element;
  value?: string;
  onChangeText?: (value: string) => void;
  secureTextEntry?: boolean;
  secureIcon?: JSX.Element;
}

const InputIcon = styled.View`
  position: absolute;
  top: 13px;
  left: 16px;
  right: 0px;
  bottom: 0px;
`;

const SecureIcon = styled.TouchableOpacity`
  position: absolute;
  top: 13px;
  right: 16px;
  bottom: 0px;
`;

const PlaceholderContainer = styled(Animated.View)`
  position: absolute;
  top: 16px;
  left: ${Spaces['4xl']}px;
`;

const AnimatedText = styled(Animated.Text)`
  font-size: 11px;
  color: ${Colors.gray};
  font-weight: 300;
  font-family: Montserrat;
`;

export const Input: React.FC<Props> = ({
  placeholder,
  icon,
  value,
  onChangeText,
  secureTextEntry,
  secureIcon,
  onBlur,
  ...props
}) => {
  const [visibleText, setVisibleText] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);
  const translateY = new Animated.Value(value ? -12 : 0);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: isFocused || value ? -12 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const handlePress = () => {
    if (secureTextEntry) {
      setVisibleText((prevState) => !prevState);
    }
  };

  return (
    <View>
      {icon && (
        <InputIcon>
          {React.cloneElement(icon, {
            stroke: isFocused ? Colors.pink : Colors.gray,
            strokeWidth: isFocused ? 0.8 : 0.1,
            fill: isFocused ? Colors.pink : Colors.gray,
          })}
        </InputIcon>
      )}

      <PlaceholderContainer style={{ transform: [{ translateY }] }}>
        <AnimatedText
          style={{
            color: isFocused || value ? Colors.white : Colors.gray,
          }}
        >
          {placeholder}
        </AnimatedText>
      </PlaceholderContainer>

      <TextInput
        {...props}
        placeholder=""
        placeholderTextColor={Colors.gray}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={visibleText}
        isFocused={isFocused}
        isSecure={secureTextEntry}
      />

      {secureTextEntry && (
        <SecureIcon onPress={handlePress}>{secureIcon}</SecureIcon>
      )}
    </View>
  );
};

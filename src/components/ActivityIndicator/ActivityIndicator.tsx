import { View } from 'react-native';
import React from 'react';
import { ActivityIndicator as Indicator } from 'react-native';
import { Colors } from '../../themeProvider';
import Modal from 'react-native-modal';

interface ActivityIndicatorProps {
  isVisible: boolean | null;
}

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  isVisible,
}) => {
  return (
    <Modal
      backdropOpacity={0.4}
      backdropColor="#000"
      isVisible={isVisible || false}
      animationIn="fadeIn"
      animationOut="fadeOut">
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Indicator size="large" color={Colors.pink} />
      </View>
    </Modal>
  );
};

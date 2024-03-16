import React from "react";
import { View, Dimensions } from 'react-native';

import { lightThemeColors } from "../../themes";

const OnboardingIndicator = (props) => {

  const { height } = Dimensions.get('window');
  const { numberOfIndicators, pageIndex } = props;
  var indicators = [];

  for (let i = 0; i < numberOfIndicators; i++) {
    indicators.push(
      <View
        key={i}
        className="w-11 h-2 rounded-full"
        style={{ backgroundColor: i == pageIndex ? lightThemeColors.primaryColor : lightThemeColors.grayScale30 }}
      ></View>
    );
  }
  return (
    <View
      className="flex-row space-x-2 w-100 absolute justify-center inset-x-0 bottom-0"
      style={{ height: height * 0.22 }}
    >
      {indicators}
    </View>
  );
}

export default OnboardingIndicator;
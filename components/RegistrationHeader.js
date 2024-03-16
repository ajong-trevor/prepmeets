import React from "react";
import { View, Text } from 'react-native';

import { lightThemeColors } from "../themes";

const RegistrationHeader = (props) => {

  const { title, subtitle } = props;

  return (
    <View className="flex items-center mt-5">
      <Text className="text-2xl font-bold" style={{ color: lightThemeColors.primaryColor }}>{title}</Text>
      <Text className="text-base" style={{ color: lightThemeColors.textGray }}>{subtitle}</Text>
    </View>
  );
}

export default RegistrationHeader;
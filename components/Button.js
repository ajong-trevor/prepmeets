import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

import { lightThemeColors } from "../themes";

const Button = (props) => {

  const { toggleDisable, handlePress, btnText, borderRadius, mTop, mBottom } = props;

  return (
    <View className={"w-80 mx-auto " + mTop + " " + mBottom}>
      <TouchableOpacity
        disabled={toggleDisable == null ? true : false}
        onPress={handlePress}
      >
        <View className={"px-10 py-4 " + borderRadius} style={{ backgroundColor: toggleDisable == null ? lightThemeColors.btnBackgroudGray : lightThemeColors.primaryColor }}>
          <Text className="m-auto text-xl font-bold" style={{ color: toggleDisable == null ? lightThemeColors.btnTextGray : lightThemeColors.textWhite }}>{btnText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

import { lightThemeColors } from "../themes";

const RadioButton = (props) => {

  const { id, title, handlePress, selectedRadio } = props;

  const raidoClass = id > 0 ? "ml-8" : null;

  return (
    <View className="flex-row">
      <TouchableOpacity onPress={handlePress}>
        <View className={"w-7 h-7 border border-2 rounded-full justify-center items-center " + raidoClass} style={{ borderColor: id == selectedRadio ? lightThemeColors.primaryColor : lightThemeColors.textGray }}>
          <View className="w-4 h-4 rounded-full" style={{ backgroundColor: id == selectedRadio ? lightThemeColors.primaryColor : null }}></View>
        </View>
      </TouchableOpacity>
      <Text className="text-lg ml-2">{title}</Text>
    </View>
  );
}

export default RadioButton;
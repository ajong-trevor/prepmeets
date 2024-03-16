import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { lightThemeColors } from "../../themes";

const CustomInputField = (props) => {

  const [text, setText] = useState("");
  const { title, placeholder, secureText, returnKey, isPasswordField, handlePress, value, setValue, errorBorder } = props;
  let textInputClass = isPasswordField ? "ml-5" : "mx-5";

  return (
    <View>
      <Text className="mt-4 mb-3 font-bold text-lg">{title}</Text>
      <View className="w-full flex-row h-16 bg-transparent border justify-center items-center rounded-full" style={{ borderColor: errorBorder == null ? lightThemeColors.textGray : errorBorder }}>
        <TextInput
          returnKeyType={returnKey}
          secureTextEntry={secureText}
          placeholder={placeholder}
          autoCorrect={false}
          className={"flex-1 text-lg " + textInputClass}
          onChangeText={setValue}
          value={value}
        />
        {
          isPasswordField ?
            <TouchableOpacity onPress={handlePress}>
              <View className="w-10 h-10 mr-2 flex justify-center items-center">
                <Ionicons name={secureText ? "eye" : "eye-off"} size={24} color={errorBorder == null ? lightThemeColors.textGray : errorBorder} />
              </View>
            </TouchableOpacity>
            : null
        }
      </View>
    </View>
  );
}

export default CustomInputField;
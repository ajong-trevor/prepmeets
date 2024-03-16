import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const RegistrationNavbar = (props) => {

  const navigation = useNavigation();
  const { isBackButton } = props;
  let justifyClass = isBackButton ? "justify-between" : "justify-end";

  return (
    <View className={"flex-row mt-8 mx-5 " + justifyClass}>
      {
        isBackButton ?
          <TouchableOpacity
            onPress={() => { navigation.goBack() }}
            className="p-1"
          >
            <Feather name="arrow-left" size={24} color="black" className="p-4" />
          </TouchableOpacity>
          : null
      }
      <TouchableOpacity className="flex-row items-center space-x-1" onPress={() => { }}>
        <EvilIcons name="question" size={34} color="red" />
        <Text className="text-red-500 text-base font-bold">Get Help</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RegistrationNavbar;
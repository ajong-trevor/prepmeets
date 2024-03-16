import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { lightThemeColors } from "../themes";

const AccountType = (props) => {

  const { width, height } = Dimensions.get('window');
  const { icon, title, description, id, handlePress, selectedType } = props;

  return (
    <TouchableOpacity onPress={handlePress} >
      <LinearGradient
        colors={
          id == selectedType ?
            [lightThemeColors.primaryColor, lightThemeColors.primaryColor] :
            ['#000000', '#FFFFFF']
        }
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
        className="rounded-2xl mt-2"
      >
        <View
          className="rounded-2xl justify-around"
          style={{
            backgroundColor: id == selectedType ? '#F5EBF9' : lightThemeColors.bgWhite,
            width: width * 0.8,
            height: height * 0.32,
            margin: 1
          }}
        >

          <View className="flex-row justify-between mx-8">
            <View></View>
            <View className="w-38 h-32">
              <Image source={icon} width={undefined} height={undefined} resizeMode="contain" className="flex-1 mx-0 p-0" />
            </View>
            {/* Ratio button */}
            <View className="w-6 h-6 border-8 rounded-full mt-4" style={{ borderColor: id == selectedType ? lightThemeColors.primaryColor : '#9BA5B7' }}></View>
          </View>

          <View className="items-center">
            <Text className="text-lg font-bold mb-2">{title}</Text>
            <View className="w-60">
              <Text className="text-center leading-5">{description}</Text>
            </View>
          </View>

        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default AccountType;
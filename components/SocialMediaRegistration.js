import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { lightThemeColors } from "../themes";

const SocialMediaRegistration = (props) => {

  const { title, showWandaPrepRegistration } = props;
  let socialMediaIconClass = showWandaPrepRegistration ? "justify-between" : "justify-center space-x-8";

  return (
    <View className="mx-5">

      {/* Top divider */}
      <View className="flex-row mt-4 justify-between">
        <View className="w-24" style={{ height: 1, backgroundColor: lightThemeColors.textGray }}></View>
        <Text className="font-thin text-lg flex-1 text-center" style={{ color: lightThemeColors.textGray }}>{title}</Text>
        <View className="w-24" style={{ height: 1, backgroundColor: lightThemeColors.textGray }}></View>
      </View>

      {/* Icons */}
      <View className={"flex-row mx-8 py-3 " + socialMediaIconClass}>
        <TouchableOpacity>
          <View className="w-16 h-16 bg-white rounded-full" style={{ elevation: 5 }}>
            <Image source={require('../assets/images/google.png')} className="flex-1 w-10 h-10 mx-auto" height={undefined} width={undefined} resizeMode="contain" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View className="w-16 h-16 rounded-full">
            <Image source={require('../assets/images/facebook.png')} className="flex-1 w-16 h-16 self-center" height={undefined} width={undefined} resizeMode="contain" />
          </View>
        </TouchableOpacity>

        {
          showWandaPrepRegistration ?
            <TouchableOpacity>
              <View className="w-16 h-16 rounded-full">
                <Image source={require('../assets/images/wandaPrep.png')} className="flex-1 w-16 h-16" height={undefined} width={undefined} resizeMode="contain" />
              </View>
            </TouchableOpacity> : null
        }

      </View>

      {/* Bottom divider */}
      <View className="flex-row mt-4 justify-between">
        <View className="w-24" style={{ height: 1, backgroundColor: lightThemeColors.textGray }}></View>
        <Text className="font-thin text-lg flex-1 text-center" style={{ color: lightThemeColors.textGray }}>Or</Text>
        <View className="w-24" style={{ height: 1, backgroundColor: lightThemeColors.textGray }}></View>
      </View>

    </View>
  );
}

export default SocialMediaRegistration;
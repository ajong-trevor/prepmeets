import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { lightThemeColors } from "../themes";

const OnboardingContent = (props) => {

  const { image, title, description, currentSlideIndex, nextSlide, previousSlide } = props;
  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <View className="flex-1" style={{ width: width * 1, }}>

      {/* Onboarding Image */}
      <View className="mx-auto mt-4 " style={{ height: height * 0.35, width: width * 1 }}>
        <Image source={image} className="flex-1 m-auto" height={undefined} width={undefined} resizeMode="contain" />
      </View>

      {/* Onboarding Text */}
      <View className="w-80 mx-auto mt-4" style={{ height: height * 0.35 }}>
        <View className="">
          <Text className="text-3xl font-bold" style={{ color: lightThemeColors.primaryColor }}>{title}</Text>
        </View>
        <View className="mt-4">
          <Text className="text-lg">{description}</Text>
        </View>
      </View>

      {/* Onboarding button */}
      <View className="flex-1 justify-center items-center">
        {
          currentSlideIndex != 1 ?
            <View>
              <TouchableOpacity
                onPress={() => currentSlideIndex == 0 ? nextSlide() : navigation.replace("AccountType")}
              >
                <View className="px-10 py-4 rounded-lg" style={{ backgroundColor: lightThemeColors.primaryColor }}>
                  <Text className="m-auto text-xl font-bold" style={{ color: lightThemeColors.textWhite }}>{currentSlideIndex == 0 ? "Get Started" : "Create an account"}</Text>
                </View>
              </TouchableOpacity>
            </View>
            :
            <View className="flex-row space-x-4">
              <View>
                <TouchableOpacity
                  onPress={() => previousSlide()}
                >
                  <View
                    className="px-10 py-4 rounded-lg"
                    style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: lightThemeColors.primaryColor }}
                  >
                    <Text className="m-auto text-xl font-bold" style={{ color: lightThemeColors.primaryColor }}>Previous</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => nextSlide()}
                >
                  <View
                    className="px-14 py-4 rounded-lg"
                    style={{ backgroundColor: lightThemeColors.primaryColor, borderWidth: 1, borderColor: lightThemeColors.primaryColor }}
                  >
                    <Text className="m-auto text-xl font-bold" style={{ color: lightThemeColors.textWhite }}>Next</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
        }
      </View>

    </View>
  );
}

export default OnboardingContent;
import React, { useState, useRef } from "react";
import { View, FlatList, Image, TouchableOpacity, Text } from 'react-native';

import OnboardingContent from "../components/OnboardingContent";
import OnboardingIndicator from "../components/OnboardingIndicator";
import { lightThemeColors } from "../themes";
import onboardingData from "../constants/onboardingData";

const OnboardingScreen = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const slideRef = useRef(null);

  const getIndex = (data) => {
    setSlideIndex(data)
  }

  const nextSlide = () => {
    const nextSlideIndex = slideIndex + 1;
    slideRef?.current?.scrollToIndex({ animated: true, index: nextSlideIndex });
    setSlideIndex(nextSlideIndex);
  }

  const previousSlide = () => {
    const previousSlideIndex = slideIndex - 1;
    slideRef?.current?.scrollToIndex({ animated: true, index: previousSlideIndex });
    setSlideIndex(previousSlideIndex);
  }

  const skipSlide = () => {
    const skipSlideIndex = onboardingData.length - 1;
    slideRef?.current?.scrollToIndex({ animated: true, index: skipSlideIndex });
    setSlideIndex(skipSlideIndex);
  }

  return (
    <View className="flex-1" style={{ backgroundColor: lightThemeColors.bgWhite }}>

      {/* Header */}
      <View className="flex-row mt-8 mx-5 justify-between">
        <Image source={require('../assets/images/logo.png')} />
        {
          slideIndex != onboardingData.length - 1 ?
            <TouchableOpacity
              onPress={skipSlide}
            >
              <Text
                className="text-lg"
                style={{ color: lightThemeColors.primaryColor }}
              >
                Skip
              </Text>
            </TouchableOpacity>
            : null
        }
      </View>

      {/* Content */}
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={onboardingData}
        renderItem={
          ({ item }) =>
            <OnboardingContent
              image={item.image}
              title={item.title}
              description={item.description}
              currentSlideIndex={item.id}
              nextSlide={nextSlide}
              previousSlide={previousSlide}
            />
        }
        keyExtractor={item => item.id}
        onViewableItemsChanged={item => { getIndex(item.viewableItems[0].index) }}
        ref={slideRef}
      />

      {/* Indicators */}
      <OnboardingIndicator
        numberOfIndicators={onboardingData.length}
        pageIndex={slideIndex}
      />

    </View>
  );
}

export default OnboardingScreen;
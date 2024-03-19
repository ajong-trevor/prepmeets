import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';

import { lightThemeColors } from '../../themes';

const HomeScreen = () => {
  return (
    <View className="flex-1" style={{ backgroundColor: lightThemeColors.bgWhite }}>
      <View
        className='flex-1 m-4 bg-black rounded-xl px-3 pt-5'
        style={{ backgroundColor: lightThemeColors.bgGray }}
      >
        <Text className='text-3xl font-extrabold'>Hello Denis</Text>
        <Text className='text-lg'>View your schedule sessions</Text>
        <Text className='text-3xl font-extrabold mt-3' style={{ color: lightThemeColors.primaryColor }}>
          Upcoming sessions
        </Text>
        <View className='flex-1 justify-center items-center'>
          <Image source={require('../../assets/images/smartPhone.png')} className='' />
          <Text className='font-bold mt-8 text-lg'>You have no schedule sessions</Text>
          <Text className='mt-8 text-center px-5'>
            Once you book lessons, you will be able to see them here. Your confirmed and pending sessions, as well as the history of your past sessions.
          </Text>
          <View className='mt-10 rounded-full' style={{ backgroundColor: lightThemeColors.primaryColor }}>
            <Text className='px-4 py-2' style={{ color: lightThemeColors.textWhite }}>Find an expert</Text>
          </View>
        </View>
        {/* <View className='flex-1 mt-8'>

          <View className='flex-row justify-between'>
            <Text className='p-1 rounded-full font-bold' style={{ backgroundColor: lightThemeColors.bgWhite }}>NAME OF EXPERT</Text>
            <Text className='p-1 rounded-full font-bold' style={{ backgroundColor: lightThemeColors.bgWhite }}>STATUS</Text>
            <Text className='p-1 rounded-full font-bold' style={{ backgroundColor: lightThemeColors.bgWhite }}>TYPE/DATE</Text>
          </View>

          <View className='flex-1 mt-4'>

            <ScrollView showsVerticalScrollIndicator={false} >

              <View className='flex-row mt-2 items-center justify-between'>

                <View className='justify-center flex-row'>
                  <Image className="w-14 h-14 rounded-full" source={require('../../assets/images/pic1.jpg')} />
                  <View className='justify-center ml-2 w-32'>
                    <Text className='font-bold text-xl' style={{ color: lightThemeColors.textDarkBlue }}>Mimi Tengeng</Text>
                    <Text style={{ color: lightThemeColors.textGray }}>AWS Cloud computing Expert</Text>
                  </View>
                </View>

                <Text style={{ color: lightThemeColors.textGreen }}>Schedule</Text>

                <View className=''>
                  <Text className='text-right' style={{ color: lightThemeColors.primaryColor }}>Interview</Text>
                  <Text className='text-right' style={{}}>24 Dec 2023</Text>
                </View>

              </View>

            </ScrollView>

          </View>
        </View> */}

      </View>
    </View>
  )
}

export default HomeScreen;

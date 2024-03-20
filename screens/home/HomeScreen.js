import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import Session from '../../components/Session';
import sessionData from '../../constants/sessionData';
import { lightThemeColors } from '../../themes';

const HomeScreen = () => {

  return (
    <View className="flex-1" style={{ backgroundColor: lightThemeColors.bgWhite }}>
      <View
        className='flex-1 m-3 bg-black rounded-xl pt-5'
        style={{ backgroundColor: lightThemeColors.bgGray }}
      >
        <View className='px-3'>
          <Text className='text-3xl font-extrabold'>Hello Denis</Text>
          <Text className='text-lg'>View your schedule sessions</Text>
          <View className='flex-row items-center justify-between'>
            <Text className='text-3xl font-extrabold mt-3' style={{ color: lightThemeColors.primaryColor }}>
              Upcoming sessions
            </Text>
            {
              sessionData.length != 0 ?
                <TouchableOpacity onPress={() => { }}>
                  <Text
                    className='underline font-bold text-lg'
                    style={{ color: lightThemeColors.primaryColor }}
                  >
                    See more
                  </Text>
                </TouchableOpacity> : null
            }
          </View>
        </View>
        {
          sessionData.length == 0 ?
            <View className='flex-1 justify-center items-center'>
              <Image source={require('../../assets/images/smartPhone.png')} className='' />
              <Text className='font-bold mt-8 text-lg'>You have no schedule sessions</Text>
              <Text className='mt-8 text-center px-5'>
                Once you book lessons, you will be able to see them here. Your confirmed and pending sessions, as well as the history of your past sessions.
              </Text>
              <TouchableOpacity onPress={() => { }}>
                <View className='mt-10 rounded-full' style={{ backgroundColor: lightThemeColors.primaryColor }}>
                  <Text className='px-4 py-2' style={{ color: lightThemeColors.textWhite }}>Find an expert</Text>
                </View>
              </TouchableOpacity>
            </View>
            :
            <View className='flex-1 px-2 mt-8'>

              <View className='flex-row justify-between'>
                <Text className='p-1 rounded-full font-bold' style={{ backgroundColor: lightThemeColors.bgWhite }}>NAME OF EXPERT</Text>
                <Text className='p-1 rounded-full font-bold ml-24' style={{ backgroundColor: lightThemeColors.bgWhite }}>STATUS</Text>
                <Text className='p-1 rounded-full font-bold' style={{ backgroundColor: lightThemeColors.bgWhite }}>TYPE/DATE</Text>
              </View>

              <View className='flex-1 mt-4'>
                <ScrollView showsVerticalScrollIndicator={false} >
                  {
                    sessionData.map((session, index) => {
                      return (
                        <Session
                          key={index}
                          image={session.image}
                          name={session.name}
                          description={session.description}
                          status={session.status}
                          type={session.type}
                          date={session.date}
                        />
                      );
                    })
                  }
                </ScrollView>
              </View>
            </View>
        }

      </View>
    </View>
  )
}

export default HomeScreen;

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { lightThemeColors } from '../themes';

const Session = (props) => {

  const { image, name, description, status, type, date } = props;

  return (
    <TouchableOpacity>
      <View className='flex-row mt-3 mb-2 items-center justify-between'>

        <View className='justify-center flex-row'>
          <Image className="w-14 h-14 rounded-full" source={image} />
          <View className='justify-center ml-2 w-32'>
            <Text className='font-bold text-xl' style={{ color: lightThemeColors.textDarkBlue }}>{name}</Text>
            <Text style={{ color: lightThemeColors.textGray }}>{description}</Text>
          </View>
        </View>

        <Text style={{ color: status == 'Pending' ? lightThemeColors.textLemonGreen : lightThemeColors.textGreen }}>{status}</Text>

        <View className=''>
          <Text className='text-right' style={{ color: lightThemeColors.primaryColor }}>{type}</Text>
          <Text className='text-right' style={{}}>{date}</Text>
        </View>

      </View>
    </TouchableOpacity>
  );
}

export default Session;
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { lightThemeColors } from '../../../themes';
import RegistrationHeader from '../../../components/RegistrationHeader';
import RegistrationNavbar from '../../../components/RegistrationNavbar';
import CustomInputField from '../../../components/textInput/CustomInputField';
import Button from '../../../components/buttons/Button';
import SocialMediaRegistration from '../../../components/SocialMediaRegistration';
import InputFieldErrorMessage from '../../../components/textInput/InputFieldErrorMessage';

const ExpertLoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [errorBorderColor, setErrorBorderColor] = useState('');
  const navigation = useNavigation();

  const validateSignup = () => {
    let errors = {};
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email) {
      errors.email = 'Email is required';
      setErrorBorderColor('red');
    } else if (reg.test(email) === false) {
      errors.email = 'Invalid email';
      setErrorBorderColor('red');
    }

    if (!password) {
      errors.password = 'Password is required';
      setErrorBorderColor('red');
    } else if (password.length < 6) {
      errors.password = 'Password too short';
      setErrorBorderColor('red');
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  return (
    <View className="flex-1" style={{ backgroundColor: lightThemeColors.bgWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Navbar */}
        <RegistrationNavbar isBackButton={true} />

        {/* Heaser */}
        <RegistrationHeader
          title="Login to Prepmeets as"
          subtitle="an expert"
        />

        {/* social media icons */}
        <SocialMediaRegistration title='Login with' showWandaPrepRegistration={false} />

        {/* Input fields */}
        <View className='mx-5 mt-8'>
          {/* Email */}
          <CustomInputField
            title='Email'
            placeholder='Enter your email'
            secureText={false}
            returnKey='go'
            setValue={setEmail}
            value={email}
            errorBorder={errors.email ? errorBorderColor : null}
          />
          {/* Email error message */}
          {
            <InputFieldErrorMessage error={errors.email} />
          }
          {/* Password */}
          <CustomInputField
            title='Password'
            placeholder='*************'
            secureText={true}
            returnKey='go'
            setValue={setPassword}
            value={password}
            errorBorder={errors.password ? errorBorderColor : null}
          />
          {/* Password error message */}
          {
            <InputFieldErrorMessage error={errors.password} />
          }
        </View>

        {/* Forget password */}
        <TouchableOpacity className="self-end" onPress={() => { }}>
          <View className="flex mx-5 mt-2">
            <Text className="font-bold text-lg" style={{ color: lightThemeColors.textOrange }}>Forgot password?</Text>
          </View>
        </TouchableOpacity>

        {/* Login button */}
        <Button
          btnText="Login"
          handlePress={validateSignup}
          toggleDisable={false}
          borderRadius="rounded-full"
          mTop="mt-12"
          mBottom="mb-4"
        />

        {/* Link to sign up screen */}
        <View className="flex-row justify-center items-center mb-8">
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ExpertSignup")}
            className="ml-2"
          >
            <Text style={{ color: lightThemeColors.textOrange }}>Sign up now</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

export default ExpertLoginScreen;
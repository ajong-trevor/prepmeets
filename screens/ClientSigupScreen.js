import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import RegistrationHeader from '../components/RegistrationHeader';
import RegistrationNavbar from '../components/RegistrationNavbar';
import CustomInputField from '../components/CustomInputField';
import Button from '../components/Button';
import SocialMediaRegistration from '../components/SocialMediaRegistration';
import { lightThemeColors } from '../themes';
import InputFieldErrorMessage from '../components/InputFieldErrorMessage';

const ClientSignupScreen = () => {

  const [acceptConditions, setAcceptConditions] = useState(false);
  const [securePasswordText, setSecurePasswordText] = useState(true);
  const [secureConfirmPasswordText, setSecureConfirmPasswordText] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorBorderColor, setErrorBorderColor] = useState('');
  const [errors, setErrors] = useState({});

  const validateSignup = () => {
    let errors = {};
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!fullName) {
      errors.fullName = 'Name is required';
      setErrorBorderColor('red');
    }

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

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm password is requried';
      setErrorBorderColor('red');
    } else if (confirmPassword != password) {
      errors.confirmPassword = "Passwords don't match";
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
          title="Sign-Up to Prepmeets as"
          subtitle="a student"
        />

        {/* social media icons */}
        <SocialMediaRegistration title="Sign-Up with" showWandaPrepRegistration={true} />

        {/* Input fields */}
        <View className='mx-5 mt-8'>
          {/* Full Name */}
          <CustomInputField
            title='Full Name'
            placeholder='Enter your name'
            secureText={false}
            returnKey='next'
            setValue={setFullName}
            value={fullName}
            errorBorder={errors.fullName ? errorBorderColor : null}
          />
          {/* Full name error message */}
          {
            <InputFieldErrorMessage error={errors.fullName} />
          }
          {/* Email */}
          <CustomInputField
            title='Email Address'
            placeholder='Enter your email'
            secureText={false}
            returnKey='next'
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
            secureText={secureConfirmPasswordText}
            returnKey="next"
            isPasswordField={true}
            handlePress={() => setSecureConfirmPasswordText(!secureConfirmPasswordText)}
            setValue={setPassword}
            value={password}
            errorBorder={errors.password ? errorBorderColor : null}
          />
          {/* Password error message */}
          {
            <InputFieldErrorMessage error={errors.password} />
          }
          {/* Confirm Password */}
          <CustomInputField
            title='Confirm Password'
            placeholder='*************'
            secureText={securePasswordText}
            returnKey="go"
            isPasswordField={true}
            handlePress={() => setSecurePasswordText(!securePasswordText)}
            setValue={setConfirmPassword}
            value={confirmPassword}
            errorBorder={errors.confirmPassword ? errorBorderColor : null}
          />
          {/* Confirm password error message */}
          {
            <InputFieldErrorMessage error={errors.confirmPassword} />
          }
        </View>

        {/* Terms and conditions */}

        <View className="flex-row mt-8 mx-5">
          <TouchableOpacity onPress={() => setAcceptConditions(!acceptConditions)}>
            <View className="w-7 h-7 rounded border flex justify-center items-center" style={{ backgroundColor: acceptConditions ? lightThemeColors.primaryColor : null, borderColor: errorBorderColor != null ? lightThemeColors.textGray : errorBorderColor }}>
              <Feather className="flex" name="check" size={20} color={acceptConditions ? "white" : "transparent"} />
            </View>
          </TouchableOpacity>
          <Text className="mx-5">
            Yes, I understand and agree to the <TouchableOpacity onPress={() => { }}><Text className="underline" style={{ color: lightThemeColors.primaryColor }}>Privacy Policy</Text></TouchableOpacity> and <TouchableOpacity onPress={() => { }}><Text className="underline" style={{ color: lightThemeColors.primaryColor }}>Terms & Conditions</Text></TouchableOpacity>
          </Text>
        </View>


        {/* Signup button */}
        <Button
          btnText="Signup"
          handlePress={validateSignup}
          toggleDisable={false}
          borderRadius="rounded-full"
          mTop="mt-8"
          mBottom="mb-12"
        />

      </ScrollView>
    </View>
  );
}

export default ClientSignupScreen;
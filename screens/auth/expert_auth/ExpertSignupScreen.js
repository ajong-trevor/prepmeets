import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { MaterialIcons } from '@expo/vector-icons';

import RegistrationHeader from '../../../components/RegistrationHeader';
import RegistrationNavbar from '../../../components/RegistrationNavbar';
import CustomInputField from '../../../components/textInput/CustomInputField';
import Button from '../../../components/buttons/Button';
import SocialMediaRegistration from '../../../components/SocialMediaRegistration';
import { lightThemeColors } from '../../../themes';
import RadioButton from '../../../components/buttons/RadioButton';
import radioData from '../../../constants/radioData';
import InputFieldErrorMessage from '../../../components/textInput/InputFieldErrorMessage';

const ClientSignupScreen = () => {

  const [securePasswordText, setSecurePasswordText] = useState(true);
  const [secureConfirmPasswordText, setSecureConfirmPasswordText] = useState(true);
  const [hasCertification, setHasCertification] = useState(null);
  const [errorBorderColor, setErrorBorderColor] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [chooseAreaOfFocus, setChooseAreaOfFocus] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const countries = ['Interview practice', 'Exam readiness', 'Private lessons'];

  const handleCertifications = (index) => {
    setHasCertification(index);
    console.log(index);
  }

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

    if (!chooseAreaOfFocus) {
      errors.chooseAreaOfFocus = 'Area of focus is required';
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
    <View className='flex-1' style={{ backgroundColor: lightThemeColors.bgWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Navbar */}
        <RegistrationNavbar isBackButton={true} />

        {/* Heaser */}
        <RegistrationHeader
          title='Sign-Up to Prepmeets as'
          subtitle='an expert'
        />

        {/* social media icons */}
        <SocialMediaRegistration title='Sign-Up with' showWandaPrepRegistration={false} />

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
          {/* Error message */}
          <InputFieldErrorMessage error={errors.fullName} />

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
          {/* Error message */}
          <InputFieldErrorMessage error={errors.email} />

          {/* choose area of focus Dropdown */}
          <Text className='mt-4 mb-3 font-bold text-lg'>Choose area of focus</Text>
          <View className='w-full flex-row h-16 bg-transparent border justify-center items-center rounded-full' style={{ borderColor: errors.chooseAreaOfFocus ? errorBorderColor : lightThemeColors.textGray }}>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                setChooseAreaOfFocus(selectedItem);
                console.log(chooseAreaOfFocus);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              renderDropdownIcon={isOpened => {
                return <MaterialIcons name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} color={errors.chooseAreaOfFocus ? errorBorderColor : lightThemeColors.textGray} size={24} />;
              }}
              dropdownIconPosition={'right'}
              buttonTextStyle={{ textAlign: 'left' }}
              defaultButtonText='Choose'
              buttonStyle={{ flex: 1, borderRadius: 100, backgroundColor: 'transparent', marginHorizontal: 5 }}
            />
          </View>
          {/* Error message */}
          <InputFieldErrorMessage error={errors.chooseAreaOfFocus} />

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
          {/* Error message */}
          <InputFieldErrorMessage error={errors.password} />

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
          {/* Error message */}
          <InputFieldErrorMessage error={errors.confirmPassword} />
        </View>

        {/* Terms and conditions */}
        <View className="flex-row mt-8 mx-5">
          <Text className="text-lg">
            Do you have any valid DevOps or Cloud certification?
          </Text>
        </View>

        {/* Radio Button */}
        <View className="mx-5 my-4 flex-row">
          {
            radioData.map((item, index) => {
              return (
                <RadioButton
                  key={index}
                  id={item.id}
                  title={item.title}
                  handlePress={() => handleCertifications(index)}
                  selectedRadio={hasCertification}
                />
              );
            })
          }
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
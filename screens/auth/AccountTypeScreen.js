import React, { useState } from "react";
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { lightThemeColors } from "../../themes";
import AccountType from "../../components/AccountType";
import RegistrationNavbar from "../../components/RegistrationNavbar";
import RegistrationHeader from "../../components/RegistrationHeader";
import accountTypeData from "../../constants/accountTypeData";
import Button from "../../components/buttons/Button";

const AccountTypeScreen = () => {

  const [selectedType, setSelectedType] = useState(null);
  const navigation = useNavigation();

  const handleaccountTypePress = (selectedIndex) => {
    setSelectedType(selectedIndex);
  }

  const handleButtonPress = () => {
    if (selectedType == 0) {
      navigation.navigate("ClientLogin");
    } else if (selectedType == 1) {
      navigation.navigate("ExpertLogin");
    } else {
      return;
    }
  }



  return (
    <View className="flex-1" style={{ backgroundColor: lightThemeColors.bgWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* navbar */}
        <RegistrationNavbar isBackButton={false} />

        {/* header */}
        <RegistrationHeader
          title="Login to Prepmeet as"
          subtitle="Choose your account type"
        />

        <View className="items-center ">

          {/* AccountType component */}
          {
            accountTypeData.map((accountType, index) => {
              return (
                <React.Fragment key={index}>
                  <AccountType
                    key={index}
                    id={accountType.id}
                    icon={accountType.icon}
                    title={accountType.title}
                    description={accountType.description}
                    handlePress={() => handleaccountTypePress(index)}
                    selectedType={selectedType}
                  />

                  {/* divider */}
                  {index == 0 &&
                    <View className="w-60 bg-gray-200 mt-6 mb-4" style={{ height: 1 }}></View>}
                </React.Fragment>
              );
            })
          }

        </View>

        {/* Button */}
        <Button
          toggleDisable={selectedType}
          btnText="Continue"
          handlePress={() => handleButtonPress()}
          borderRadius="rounded-lg"
          mTop="mt-12"
          mBottom="mb-12"
        />

      </ScrollView>
    </View>
  );
}

export default AccountTypeScreen;
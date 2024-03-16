import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './screens/OnboardingScreen';
import AccountTypeScreen from './screens/auth/AccountTypeScreen';
import ClientLoginScreen from './screens/auth/client_auth/ClientLoginScreen';
import ClientSignupScreen from './screens/auth/client_auth/ClientSigupScreen';
import ExpertLoginScreen from './screens/auth/expert_auth/ExpertLoginScreen';
import ExpertSignupScreen from './screens/auth/expert_auth/ExpertSignupScreen';
import HomeScreen from './screens/home/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="AccountType" component={AccountTypeScreen} />
        <Stack.Screen name="ClientLogin" component={ClientLoginScreen} />
        <Stack.Screen name="ClientSignup" component={ClientSignupScreen} />
        <Stack.Screen name="ExpertLogin" component={ExpertLoginScreen} />
        <Stack.Screen name="ExpertSignup" component={ExpertSignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
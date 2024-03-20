import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { View, Image, TouchableOpacity } from 'react-native';

// import OnboardingScreen from './screens/OnboardingScreen';
// import AccountTypeScreen from './screens/auth/AccountTypeScreen';
// import ClientLoginScreen from './screens/auth/client_auth/ClientLoginScreen';
// import ClientSignupScreen from './screens/auth/client_auth/ClientSigupScreen';
// import ExpertLoginScreen from './screens/auth/expert_auth/ExpertLoginScreen';
// import ExpertSignupScreen from './screens/auth/expert_auth/ExpertSignupScreen';
import HomeScreen from './screens/home/HomeScreen';
import FindExpertScreen from './screens/findExpert/FindExpertScreen';
import ManageSessionsScreen from './screens/manageSessions/ManageSessionsScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import ChatList from './screens/chat/ChatListScreen';
import { lightThemeColors } from './themes';

const Stack = createNativeStackNavigator();
const Tap = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="AccountType" component={AccountTypeScreen} />
        <Stack.Screen name="ClientLogin" component={ClientLoginScreen} />
        <Stack.Screen name="ClientSignup" component={ClientSignupScreen} />
        <Stack.Screen name="ExpertLogin" component={ExpertLoginScreen} />
        <Stack.Screen name="ExpertSignup" component={ExpertSignupScreen} />
      </Stack.Navigator> */}

      <Tap.Navigator screenOptions={({ route }) => ({

        headerTitle: 'Client',

        headerStyle: {
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowColor: "black",
          shadowOpacity: 1,
          shadowRadius: 3.84,
          elevation: 3,
        },

        headerLeft: () => (
          <TouchableOpacity onPress={() => { }}>
            <View className="ml-6">
              <Image className="w-12 h-12 rounded-full" source={require('./assets/images/profilePicture.jpg')} />
            </View>
          </TouchableOpacity>
        ),

        headerRight: () => (
          <View className="flex-row space-x-6 mr-6">
            <TouchableOpacity onPress={() => { }}>
              <Feather name="bell" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
              <Feather name="message-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ),

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'FindExpert') {
            iconName = 'users'
          } else if (route.name === 'ManageSessions') {
            iconName = 'command'
          } else if (route.name === 'Profile') {
            iconName = 'user'
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: lightThemeColors.primaryColor,
        tabBarInactiveTintColor: lightThemeColors.tabInactiveIcon,
      })}>
        <Tap.Screen name='Home' component={HomeScreen} />
        <Tap.Screen name='FindExpert' component={FindExpertScreen} />
        <Tap.Screen name='ManageSessions' component={ManageSessionsScreen} />
        <Tap.Screen name='Profile' component={ProfileScreen} />
      </Tap.Navigator>

    </NavigationContainer>
  );
}

export default Navigation;
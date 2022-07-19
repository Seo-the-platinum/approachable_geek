import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProfilePage from './views/profile-page/ProfilePage'
import NameInput from './views/name-input/NameInput'
import EmailInput from './views/email-input/EmailInput'
import PhoneInput from './views/phone-input/PhoneInput'
import PhotoInput from './views/photo-input/PhotoInput'
import About from './views/about/About'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='Profile-Page' component={ProfilePage} />
          <Stack.Screen name='Name-Input' component={NameInput} />
          <Stack.Screen name='Email-Input' component={EmailInput} />
          <Stack.Screen name='Phone-Input' component={PhoneInput} />
          <Stack.Screen name='Photo-Input' component={PhotoInput} />
          <Stack.Screen name='About-Input' component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../components/BackButton'

const PhoneInput = ({navigation}) => {
  return (
    <SafeAreaView>
        <BackButton navigation={navigation}/>
        <Text> Hi! Phone Input here! </Text>
    </SafeAreaView>
  )
}

export default PhoneInput
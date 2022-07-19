import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../components/BackButton'

const EmailInput = ({navigation}) => {
  return (
    <SafeAreaView>
        <BackButton navigation={navigation}/>
        <Text>Hi! Email here!</Text>
    </SafeAreaView>
  )
}

export default EmailInput
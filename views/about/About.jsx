import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../components/BackButton'

const About = ({navigation}) => {
  return (
    <SafeAreaView>
        <BackButton navigation={navigation}/>
        <Text>
            Hi! About Me!
        </Text>
    </SafeAreaView>
  )
}

export default About
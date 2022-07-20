import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const BackButton = ({navigation}) => {
    const goBack = ()=> {
        navigation.navigate('Profile-Page')
    }
  return (
    <Pressable onPress={goBack} style={{marginLeft: 10}}>
        <Ionicons name="arrow-back" size={24} color="black" />
    </Pressable>
  )
}

export default BackButton
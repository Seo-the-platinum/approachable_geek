import { Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const ToPageButton = ({navigation, route, data}) => {
  
  const goToPage = ()=> {
      navigation.navigate(route, {...data})
  }
  return (
    <Pressable onPress={goToPage}>
        <AntDesign name="right" size={24} color="#aaaaaa" />
    </Pressable>
  )
}

export default ToPageButton
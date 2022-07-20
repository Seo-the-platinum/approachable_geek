import React from 'react'
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../../components/BackButton'
import * as ImagePicker from 'expo-image-picker';
import UpdateButton from '../../components/UpdateButton'
import { globalStyles } from '../../styles'

const PhotoInput = ({navigation, route}) => {
  const { img } = route.params
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      navigation.navigate('Profile-Page', {image: result.uri})
    }
  };
  return (
    <SafeAreaView style={ globalStyles.editPageContainer}>
        <BackButton navigation={navigation}/>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Upload a photo of yourself:</Text>
          {img && <Image resizeMode='cover' source={typeof img === 'string' ? {uri:img} :img} style={{ marginTop: 30, width: 250, height: 250 }} />}
          <UpdateButton func={pickImage}/>
        </View>
    </SafeAreaView>
  )
}

export default PhotoInput
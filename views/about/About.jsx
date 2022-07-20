import React, { useState } from 'react'
import { Platform, Text, TextInput, View } from 'react-native';
import EditPage from '../../components/EditPage'
import { globalStyles } from '../../styles.js'
import InvalidInput from '../../components/InvalidInput'
import { INVALID_ABOUT } from '../../utils';
import { styles } from './aboutStyles.js'

const About = ({navigation, route}) => {
  const [ about, setAbout ] = useState(route.params.value)
  const [ invalid, setInvalid ] = useState(false)

  const toProfile = ()=> {
    if (about.length < 1) {
      setInvalid(true)
    } else {
      setInvalid(false)
      navigation.navigate('Profile-Page', {
        type: route.params.type,
        value: about
      })
    }
  }
  return (
    <EditPage navigation={navigation} func={toProfile}>
      <Text style={globalStyles.editPageHeader}>
        What type of passanger are you?
      </Text>
      <View style={Platform.OS === 'web' ? styles.webInputContainer : globalStyles.editPageInputContainer}>
        <Text style={globalStyles.inputHeader}> 
          Write a little bit about yourself. Do you like Chatting? Are you a smoker? Do you bring pets with you? Etc.
        </Text>
        <TextInput onChangeText={setAbout} maxLength={200} multiline={true} style={ Platform.OS === 'web' ? styles.inputValue : globalStyles.inputValue } value={about}/>
        { invalid && <InvalidInput error={INVALID_ABOUT}/>}
      </View>
    </EditPage>
  )
}

export default About
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native';
import EditPage from '../../components/EditPage'
import { globalStyles } from '../../styles.js'

const About = ({navigation, route}) => {
  const [ about, setAbout ] = useState(route.params.value)
  
  const toProfile = ()=> {
    navigation.navigate('Profile-Page', {
      type: route.params.type,
      value: about
    })
  }
  return (
    <EditPage navigation={navigation} func={toProfile}>
      <Text style={globalStyles.editPageHeader}>
        What type of passanger are you?
      </Text>
      <View style={globalStyles.editPageInputContainer}>
        <Text style={globalStyles.inputHeader}> 
          Write a little bit about yourself. Do you like Chatting? Are you a smoker? Do you bring pets with you? Etc.
        </Text>
        <TextInput onChangeText={setAbout} maxLength={200} multiline={true} style={globalStyles.inputValue} value={about}/>
      </View>
    </EditPage>
  )
}

export default About
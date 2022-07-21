import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native';
import EditPage from '../../components/EditPage'
import { INVALID_EMAIL } from '../../utils';
import { globalStyles } from '../../styles'
import { validateEmail } from '../../utils.js';
import InvalidInput from '../../components/InvalidInput'

const EmailInput = ({navigation, route}) => {
  const [email, setEmail ] = useState(route.params.value)
  const [ invalid, setInvalid ] = useState(false)

  const toProfile = ()=> {
    if (!validateEmail(email)) {
      setInvalid(true)
    } else {
      navigation.navigate('Profile-Page',{
        type: route.params.type,
        value: email,
      })
    }
  }

  return (
    <EditPage navigation={navigation} func={toProfile}>
      <Text style={globalStyles.editPageHeader}>
        Whats your email?
      </Text>
      <View style={globalStyles.editPageInputContainer}>
        <Text style={globalStyles.inputHeader}>Your email address</Text>
        <TextInput keyboardType='email-address' onChangeText={setEmail} maxLength={50} value={email} style={invalid ? globalStyles.invalidInput: globalStyles.inputValue}/>
      </View>
        {invalid && <InvalidInput error={INVALID_EMAIL}/>}
    </EditPage>
  )
}

export default EmailInput
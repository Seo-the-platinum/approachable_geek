import React, { useState } from 'react'
import {  Text, TextInput, View } from 'react-native';
import { INVALID_PHONE } from '../../utils';
import InvalidInput from '../../components/InvalidInput'
import { phoneNumberFormatter } from '../../utils.js'
import EditPage from '../../components/EditPage'
import { globalStyles } from '../../styles'

const PhoneInput = ({navigation, route}) => {
  const [ number, setNumber ] = useState(route.params.value)
  const [ invalid, setInvalid ] = useState(false)

  const toProfile = ()=> {
    if (number.length !== 10) {
      setInvalid(true)
      return
    } else {
      setInvalid(false)
      navigation.navigate('Profile-Page', {
        type: route.params.type, 
        value: phoneNumberFormatter(number)})
    }
  }
  const clearPreview = ()=> {
    setNumber('')
  }
  return (
    <EditPage navigation={navigation} func={toProfile}>
      <Text style={globalStyles.editPageHeader}>
        What's your phone number?
      </Text>
      <View style={globalStyles.editPageInputContainer}>
        <Text style={globalStyles.inputHeader}>Your Phone Number</Text>
        <TextInput keyboardType='number-pad' onChangeText={setNumber} onFocus={clearPreview} maxLength={10} value={number} style={invalid ? globalStyles.invalidInput: globalStyles.inputValue}/>
      </View>
        {invalid && <InvalidInput error={INVALID_PHONE}/>}
    </EditPage>
            
  )
}

export default PhoneInput
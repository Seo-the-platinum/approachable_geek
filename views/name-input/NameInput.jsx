import React, { useState } from 'react'
import { Text, TextInput, View, } from 'react-native';
import EditPage from '../../components/EditPage'
import { validateName } from '../../utils.js'
import { INVALID_NAME } from '../../utils';
import InvalidInput from '../../components/InvalidInput'
import { globalStyles } from '../../styles';

const NameInput = ({navigation, route}) => {
  const [ first, setFirst ] = useState(route.params.value.split(' ')[0])
  const [ last, setLast ] = useState(route.params.value.split(' ')[1])
  const [ firstInvalid, setFirstInvalid ] = useState(false)
  const [ lastInvalid, setLastInvalid ] = useState(false)


  const toProfile = ()=> {
    if (!validateName(first) && !validateName(last)) {
      setFirstInvalid(true)
      setLastInvalid(true)

    } else if (!validateName(first)) {
      setFirstInvalid(true)

    } else if (!validateName(last)){
      setLastInvalid(true)

    } else {
      setFirstInvalid(false)
      setLastInvalid(false)
      navigation.navigate('Profile-Page', {
        type: route.params.type, 
        value: `${first} ${last}`})
    }
  }
  
  return (
    <EditPage navigation={navigation} func={toProfile}>
      <Text style={globalStyles.editPageHeader}>
        What's your name?
      </Text>
      <View style={[globalStyles.editPageInputView, {flexDirection: 'row',}]}>
        <View style={[globalStyles.editPageInputContainer, {width: '45%'}]}>
          <Text style={globalStyles.inputHeader}>First Name</Text>
          <TextInput value={first} onChangeText={setFirst} style={firstInvalid ? globalStyles.invalidInput : globalStyles.inputValue} />
        </View>
        <View style={[globalStyles.editPageInputContainer, {width: '45%'}]}>
          <Text style={globalStyles.inputHeader}>Last Name</Text>
          <TextInput value={last} onChangeText={setLast} style={lastInvalid ? globalStyles.invalidInput : globalStyles.inputValue} />
        </View>
      </View>
          {(firstInvalid || lastInvalid) && <InvalidInput error={INVALID_NAME}/>}
    </EditPage>
  )
}

export default NameInput
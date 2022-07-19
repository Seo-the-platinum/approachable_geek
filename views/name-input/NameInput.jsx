import React, { useState } from 'react'
import { Keyboard, Text, TextInput, TouchableWithoutFeedback, SafeAreaView, View, } from 'react-native';
import BackButton from '../../components/BackButton'
import UpdateButton from '../../components/UpdateButton';

const NameInput = ({navigation, route}) => {
  const [ first, setFirst ] = useState(route.params.value.split(' ')[0])
  const [ last, setLast ] = useState(route.params.value.split(' ')[1])

  const toProfile = ()=> {
    navigation.navigate('Profile-Page', {
      type: route.params.type, 
      value: `${first} ${last}`})
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView>
          <BackButton navigation={navigation}/>
          <View style={{alignItems:'center'}}>
            <Text>
                Whats your name?
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{borderWidth: 1, borderColor: '#aaaaaa', width: '40%'}}>
                <Text>First Name</Text>
                <TextInput value={first} onChangeText={setFirst} keyboardType='default'/>
              </View>
              <View style={{borderWidth: 1, borderColor: '#aaaaaa', width: '40%'}}>
                <Text>Last Name</Text>
                <TextInput value={last} onChangeText={setLast}/>
              </View>
            </View>
            <UpdateButton func={toProfile}/>
          </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default NameInput
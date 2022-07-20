import React, { useState } from 'react'
import { Keyboard, Text, TouchableWithoutFeedback, SafeAreaView, View, } from 'react-native';
import BackButton from './BackButton'
import UpdateButton from './UpdateButton';

const EditPage = ({children, navigation, func, type}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{height: '100%'}}>
          <BackButton navigation={navigation}/>
          <View style={{alignItems:'center',justifyContent:'space-between', height: '65%'}}>
            <View style={{alignItems:'center', marginTop: 30, width: '85%'}}> 
              {children}
            </View>
            <UpdateButton func={func} />
          </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default EditPage
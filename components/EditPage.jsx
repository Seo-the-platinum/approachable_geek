import React from 'react'
import { Keyboard, Platform, Text, TouchableWithoutFeedback, SafeAreaView, View, } from 'react-native';
import BackButton from './BackButton'
import UpdateButton from './UpdateButton';
import { globalStyles } from '../styles';

const EditPage = ({children, navigation, func}) => {
  return (
    <TouchableWithoutFeedback onPress={Platform.OS !== 'web' && Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={globalStyles.editPageContainer}>
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
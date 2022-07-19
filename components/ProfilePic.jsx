import React, { useState, useEffect } from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Colors } from '../styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfilePic = ({navigation, img}) => {

    const toPhotoEdit = ()=> {
        navigation.navigate('Photo-Input', {img: img})
    }
  return (
    <View style={{alignItems: 'center', width: '100%'}}>
        <Text style={{color: Colors.blue, fontSize: 25}}>Edit Profile</Text>
        <View style={{borderColor: Colors.blue, borderRadius: '70%', overflow:'hidden', height: 140, width: 140, borderWidth: 5, marginTop: 20}}>
            <TouchableWithoutFeedback onPress={toPhotoEdit}>
                <Image source={typeof img === 'string' ? {uri: img} : img} style={{height: '100%', width: '100%'}}/>
            </TouchableWithoutFeedback>
        </View>
        <View style={{
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: 'white', 
            borderRadius: '50%',
            position: 'relative',
            bottom: 130,
            left: 50,
            padding: 5}}>
            <TouchableWithoutFeedback onPress={toPhotoEdit}>
                <MaterialCommunityIcons name="pencil" size={24} color={Colors.blue} />
            </TouchableWithoutFeedback>
        </View>
</View>
  )
}

export default ProfilePic
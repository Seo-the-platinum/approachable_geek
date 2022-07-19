import React from 'react'
import { Pressable, Text } from 'react-native'
import { globalStyles } from '../styles'
const UpdateButton = ({func}) => {
  return (
    <Pressable onPress={func} style={globalStyles.updateButton}>
        <Text style={{color: 'white', fontSize: 18}}> Update</Text>
    </Pressable>
  )
}

export default UpdateButton
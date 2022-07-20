import React from 'react'
import { Text, View } from 'react-native'

const InvalidInput = ({error}) => {
  return (
    <View >
        <Text style={{color: 'red', fontSize: 12,}}>{error}</Text>
    </View>
  )
}

export default InvalidInput
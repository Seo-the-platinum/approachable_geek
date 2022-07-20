import React from 'react'
import { Text, View } from 'react-native'
import ToPageButton from './ToPageButton'
import { globalStyles } from '../styles'

const EditLink = ({navigation, data}) => {
   
  return (
    <View style={globalStyles.editLinkContainer}>
        <View style={{width: '80%', paddingLeft: 5}}>
            <Text style={globalStyles.fieldHeader}>{data.type === 'About' ? 'Tell us about yourself' : data.type}</Text>
            <Text style={globalStyles.fieldText}>{data.value}</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
            <ToPageButton navigation={navigation} route={`${data.type}-Input`} data={data} />
        </View>
    </View>
  )
}

export default EditLink
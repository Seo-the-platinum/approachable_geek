import React, { useState, useEffect } from 'react'
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mockData } from '../../utils.js'
import { styles } from './profile-page-styles'
import ProfilePic from '../../components/ProfilePic'
import EditLink from '../../components/EditLink'
import the_trash_man from '../../assets/images/the_trash_man.jpeg'

const ProfilePage = ({navigation, route}) => {
  const [ fieldValues, setFieldValues ] = useState(mockData)
  const [ img, setImg ] = useState(the_trash_man)
  
  useEffect(()=> {
    if (route.params?.image) {
      setImg(route.params.image)
    } else if (route.params) {
      setFieldValues(prev=> prev.map(obj=> {
        if (obj.type === route.params.type) {
          return route.params
        } else {
          return obj
        }
      }))
    }
  }, [route.params])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ProfilePic navigation={navigation} img={img}/>
        <View style={{ width: '90%',}}>
          {
            fieldValues.map(data=> {
              return <EditLink key={data.type} navigation={navigation} data={data}/>
            })
          }
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfilePage
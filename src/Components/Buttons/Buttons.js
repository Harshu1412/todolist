import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale } from '../Scaling/Scale'
import { styles } from './Buttons_styles'

const Buttons = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={{color:"white"}}>{name}</Text>
    </View>
  )
}

export default Buttons


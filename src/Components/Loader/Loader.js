import { StyleSheet, View,Modal,ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from './Loader_styles'

 const Loader = () => {
  return (
        <View>
          <Modal animationType="none" transparent={true} visible={true}>
               <View style={styles.centeredVieW}>
              <View style={styles.modalVieW}>
                <ActivityIndicator size={40}/>
              </View>
            </View>
          </Modal>
        </View>
  )
}
export default Loader


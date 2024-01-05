/*eslint-disable*/
import {Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const RoundeButton=({Value, border = false,onPress}:any)=> {
  return (
    <TouchableOpacity onPress={()=> onPress()}>
      <View
        style={{
          backgroundColor: border ? '#ffffff' : '#329ff1',
          width: 100,
          height: 45,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 20,
          borderColor:'#000000',
          borderWidth: border ? 1.2 : 0,
        }}>
        <Text style={{color: border ? '#000000':'#ffffff', fontSize:20, fontWeight:'bold'}}>{Value}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default RoundeButton;

/*eslint-disable*/
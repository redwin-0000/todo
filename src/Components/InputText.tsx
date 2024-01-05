/*eslint-disable*/
import {Text, View, TextInput} from 'react-native';
import React from 'react';
type input = {
  placeholder:string,
  keyboardType:any,
  secureTextEntry:any
}

const InputText = ({placeholder, keyboardType='default',secureTextEntry=false}:input) => {
  return (
    <View style={{borderColor:'#c0c1c2', borderBottomWidth:1, width:330, marginBottom:20}}>
     <TextInput
     style={{color:'#000000'}}
     placeholder={placeholder}
     keyboardType={keyboardType}
     secureTextEntry={secureTextEntry}
     />
    </View>
  )
};

export default InputText;
/*eslint-disable*/
/*eslint-disable*/
import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';

const FullRoundedButton = ({image, onPress}: any) => {
  return (
    <TouchableOpacity onPress={()=> onPress()}>
      <View>
        <Image source={image} style={{height: 50, width: 50, marginLeft: 10}} />
      </View>
    </TouchableOpacity>
  );
};
export default FullRoundedButton;
/*eslint-disable*/
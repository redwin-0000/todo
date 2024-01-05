/*eslint-disable*/
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';

const Weclome_Screen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn_Home');
    }, 2000);
  }, []);
  return (
    <ImageBackground
      source={require('../../assests/bgImage.jpg')}
      style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <View style={{height:300, aspectRatio:1}}>
      <LottieView
        style={{flex: 1}}
        source={require('../../assests/loading.json')}
        autoPlay
        loop
      />
      </View>
    </ImageBackground>
  );
};

export default Weclome_Screen;

/*eslint-disable*/
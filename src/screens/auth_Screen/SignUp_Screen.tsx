/*eslint-disable*/
import {
    StatusBar,
    Image,
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
  } from 'react-native';
  import React from 'react';
  import InputText from '../../Components/InputText';
  import RoundeButton from '../../Components/Rounded_Button';
  
  const SignUp_Screen = ({navigation}: any) => {
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fffdde',
          }}>
          <StatusBar barStyle="dark-content" backgroundColor={'#fffdde'} />
          <View style={{paddingTop: -15, marginLeft: 35}}>
            <Image
              source={require('../../assests/signI.png')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 200,
                height: 350,
              }}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -200,
            }}>
            <InputText 
            placeholder={'UserName'} 
            keyboardType={'default'} 
            />
            <InputText placeholder={'email'} keyboardType={'email-address'} />
            <InputText placeholder={'Password'} secureTextEntry={true} />
            <InputText placeholder={'Phone Number'} keyboardType={'numeric'} />
            
            <RoundeButton
              Value={'SignUp'}
              onPress={() => navigation.navigate('Login_Screen')}
            />
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <TouchableOpacity>
                <Text style={{textDecorationLine: 'underline'}}>
                  Forget Password{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 20}}>
                <Text style={{textDecorationLine: 'underline'}}>dfrLogIn</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  };
  
  export default SignUp_Screen;
  /*eslint-disable*/
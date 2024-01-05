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

const Login_Screen = ({navigation}: any) => {
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
        <View style={{paddingTop: 30, marginLeft: 40}}>
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
            marginTop: -230,
          }}>
          <InputText placeholder={'email'} keyboardType={'email-address'} />
          <InputText placeholder={'Password'} secureTextEntry={true} />
          <InputText placeholder={'Phone Number'} keyboardType={'numeric'}/>
          
          <RoundeButton
            Value={'LogIn'}
            onPress={() => navigation.navigate('Home')}
          />
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TouchableOpacity>
              <Text style={{textDecorationLine: 'underline'}}>
                Forget Password{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 20}}>
              <Text style={{textDecorationLine: 'underline'}}>LogIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login_Screen;
/*eslint-disable*/
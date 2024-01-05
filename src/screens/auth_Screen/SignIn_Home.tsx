/*eslint-disable*/

import {
  StatusBar,
  Text,
  View,
  Image,
  Button,
  Alert
} from 'react-native';
import React from 'react';
import RoundeButton from '../../Components/Rounded_Button';
import FullRoundedButton from '../../Components/fullRounded_Button';

type valueType = {
  navigation: any,
};

const SignIn_Home = ({navigation}: valueType) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffdde',
        marginTop: -40,
      }}>
        <StatusBar barStyle="dark-content" backgroundColor={'#fffdde'} />
      <Image
        source={require('../../assests/loginImage.png')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 300,
          height: 400,
        }}
        resizeMode="cover"
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Hello!</Text>
        <Text style={{fontSize: 20}}>Welcome to SignIn Page</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <RoundeButton 
        Value={'LogIn'}
        onPress={() => navigation.navigate('Login_Screen')}
        />
        <RoundeButton
          Value={'SignUp'}
          border={true}
          onPress={() => navigation.navigate('SignUp_Screen')}
        />
      </View>
      {/* social media login icons  */}
      <View
        style={{marginTop: 45, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Or via login social media account</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <FullRoundedButton image={require('../../assests/facebook.png')} />
          <FullRoundedButton image={require('../../assests/social.png')}/>
          <FullRoundedButton image={require('../../assests/linkedin.png')} />
        </View>
      </View>
    </View>
  );
};

export default SignIn_Home;

/*eslint-disable*/
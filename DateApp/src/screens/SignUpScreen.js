import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('User account created & signed in!');
      navigation.navigate('Home');
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };
  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      {error ? <Text>{error}</Text> : null}
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;

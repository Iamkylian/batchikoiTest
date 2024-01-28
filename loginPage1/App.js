import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

const LoginPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const animatedValueUsername = useRef(new Animated.Value(8)).current;
  const animatedValuePassword = useRef(new Animated.Value(8)).current;

  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleLogin = () => {
    console.log('Nom d\'utilisateur ou email:', usernameOrEmail);
    console.log('Mot de passe:', password);
  };

  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
    animatePlaceholder(animatedValueUsername, -22);
  };

  const handleUsernameBlur = () => {
    setIsUsernameFocused(false);
    if (!usernameOrEmail) {
      animatePlaceholder(animatedValueUsername, 15);
    }
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
    animatePlaceholder(animatedValuePassword, -22);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
    if (!password) {
      animatePlaceholder(animatedValuePassword, 15);
    }
  };

  const animatePlaceholder = (animatedValue, toValue) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handlePlaceholderPress = (inputRef) => {
    inputRef.current && inputRef.current.focus();
  };

  return (
    <ImageBackground
      source={require('./Img/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Connexion</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TouchableWithoutFeedback onPress={() => handlePlaceholderPress(usernameInputRef)}>
              <Animated.Text style={[styles.placeholder, { top: animatedValueUsername }]}>Nom d'utilisateur ou email</Animated.Text>
            </TouchableWithoutFeedback>
            <TextInput
              ref={usernameInputRef}
              style={styles.input}
              placeholder=""
              onChangeText={(text) => setUsernameOrEmail(text)}
              value={usernameOrEmail}
              onFocus={handleUsernameFocus}
              onBlur={handleUsernameBlur}
            />
          </View>
          <View style={styles.inputContainer}>
            <TouchableWithoutFeedback onPress={() => handlePlaceholderPress(passwordInputRef)}>
              <Animated.Text style={[styles.placeholder, { top: animatedValuePassword }]}>Mot de passe</Animated.Text>
            </TouchableWithoutFeedback>
            <TextInput
              ref={passwordInputRef}
              style={styles.input}
              placeholder=""
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonSubmit}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    paddingBottom: 30,
    paddingTop: 30,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  placeholder: {
    position: 'absolute',
    left: 15,
    color: 'gray',
  },
  button: {
    backgroundColor: '#900C3F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonSubmit: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
});

export default LoginPage;

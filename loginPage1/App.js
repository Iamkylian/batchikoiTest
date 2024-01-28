import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const LoginPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Nom d\'utilisateur ou email:', usernameOrEmail);
    console.log('Mot de passe:', password);
    // Ajoutez ici la logique de connexion avec votre backend
  };

  return (
    <ImageBackground
      source={require('./Img/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Connexion</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nom d'utilisateur ou email"
            onChangeText={(text) => setUsernameOrEmail(text)}
            value={usernameOrEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // ou 'stretch' pour remplir toute la vue
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Couleur de fond avec opacité
    padding: 20,
    borderRadius: 10,
    width: '80%', // Largeur du formulaire par rapport à l'écran
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white', // Couleur du texte
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white', // Couleur de fond du champ de saisie
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginPage;
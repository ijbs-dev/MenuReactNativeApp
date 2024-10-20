import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setDarkModeEnabled(previousState => !previousState);

  return (
    <ImageBackground
      source={require('../img/f01.jpg')} // Caminho para a imagem de fundo
      style={styles.backgroundImage}
      // eslint-disable-next-line react-native/no-inline-styles
      imageStyle={{ opacity: 0.3 }} // Clarear a imagem de fundo
    >
      <ScrollView contentContainerStyle={[styles.container, darkModeEnabled ? styles.darkContainer : styles.lightContainer]}>
        <View style={styles.header}>
          <Text style={[styles.headerText, darkModeEnabled ? styles.darkText : styles.lightText]}>Configurações</Text>
        </View>

        {/* Notificações */}
        <View style={styles.settingRow}>
          <Icon name="notifications" size={24} color="#4A90E2" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={[styles.settingTitle, darkModeEnabled ? styles.darkText : styles.lightText]}>Notificações</Text>
            <Text style={[styles.settingDescription, darkModeEnabled ? styles.darkText : styles.lightText]}>
              Ative para receber notificações push
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={notificationsEnabled ? "#4A90E2" : "#f4f3f4"}
            onValueChange={toggleNotifications}
            value={notificationsEnabled}
          />
        </View>

        {/* Modo escuro */}
        <View style={styles.settingRow}>
          <Icon name="brightness-6" size={24} color="#4A90E2" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={[styles.settingTitle, darkModeEnabled ? styles.darkText : styles.lightText]}>Modo Escuro</Text>
            <Text style={[styles.settingDescription, darkModeEnabled ? styles.darkText : styles.lightText]}>
              Ative para usar o tema escuro
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#50b0ff" }}
            thumbColor={darkModeEnabled ? "#4A90E2" : "#f4f3f4"}
            onValueChange={toggleDarkMode}
            value={darkModeEnabled}
          />
        </View>

        {/* Alterar senha */}
        <TouchableOpacity style={styles.settingRow}>
          <Icon name="lock" size={24} color="#4A90E2" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={[styles.settingTitle, darkModeEnabled ? styles.darkText : styles.lightText]}>Alterar Senha</Text>
            <Text style={[styles.settingDescription, darkModeEnabled ? styles.darkText : styles.lightText]}>
              Atualize sua senha de acesso
            </Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="#ccc" />
        </TouchableOpacity>

        {/* Contatos e suporte */}
        <TouchableOpacity style={styles.settingRow}>
          <Icon name="help-outline" size={24} color="#4A90E2" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={[styles.settingTitle, darkModeEnabled ? styles.darkText : styles.lightText]}>Suporte</Text>
            <Text style={[styles.settingDescription, darkModeEnabled ? styles.darkText : styles.lightText]}>
              Fale com a nossa equipe de suporte
            </Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="#ccc" />
        </TouchableOpacity>

        {/* Botão de Sair */}
        <TouchableOpacity style={styles.logoutButton}>
          <Icon name="exit-to-app" size={24} color="#e74c3c" />
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 20,
  },
  lightContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)', // Fundo claro
  },
  darkContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.90)', // Fundo escuro
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  lightText: {
    color: '#34495e', // Texto claro
  },
  darkText: {
    color: '#34495e', // Texto escuro
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  settingDescription: {
    fontSize: 14,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    borderColor: '#e74c3c',
    borderWidth: 1,
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;

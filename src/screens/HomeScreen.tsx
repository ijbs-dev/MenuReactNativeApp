import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Modal, TextInput, ImageBackground } from 'react-native';
import axios from 'axios';
import { PieChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';
import YoutubeIframe from 'react-native-youtube-iframe';

// Dimensões da tela para o gráfico e vídeo
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const [soma, setSoma] = useState<number | null>(null);
  const [percentuais, setPercentuais] = useState<any>(null);
  const [stringInvertida, setStringInvertida] = useState<string | null>(null);
  const [detailsVisible, setDetailsVisible] = useState(false); // Controle do modal de lógica do desafio
  const [, setShowImage] = useState(true); // Controle da visibilidade da imagem
  const [inputModalVisible, setInputModalVisible] = useState(false); // Controle do modal para entrada de string
  const [userInput, setUserInput] = useState(''); // Armazena a string digitada pelo usuário

  // Resetar estados quando a tela "Home" for acessada
  useFocusEffect(
    useCallback(() => {
      setSoma(null);
      setPercentuais(null);
      setStringInvertida(null);
      setDetailsVisible(false);
      setShowImage(true);
      setUserInput('');
    }, [])
  );

  // Função para obter a soma
  const obterSoma = () => {
    setPercentuais(null);
    setStringInvertida(null);
    setShowImage(false);
    axios.get('http://10.0.2.2:3000/questao1')
      .then(response => setSoma(response.data.soma))
      .catch(error => console.error(error));
  };

  // Função para obter os percentuais
  const obterPercentuais = () => {
    setSoma(null);
    setStringInvertida(null);
    setShowImage(false);
    axios.get('http://10.0.2.2:3000/questao2')
      .then(response => setPercentuais(response.data))
      .catch(error => console.error(error));
  };

  // Função para inverter string (Questão 3)
  const inverterString = () => {
    setSoma(null);
    setPercentuais(null);
    setShowImage(false);
    const stringOriginal = userInput; // String fornecida pelo usuário
    const resultadoInvertido = stringOriginal.split('').reverse().join('');
    setStringInvertida(resultadoInvertido); // Atualizar estado com a string invertida
    setInputModalVisible(false); // Fechar modal de input
  };

  // Função para abrir o modal de input para a Questão 3
  const abrirModalInverterString = () => {
    setInputModalVisible(true); // Exibir o modal para o input da string
  };

  // Função para abrir o modal de explicação
  const abrirModalExplicacao = () => {
    setDetailsVisible(true);
  };

  // Dados do gráfico de pizza formatados com duas casas decimais
  const dataPieChart = percentuais ? [
    { name: 'SP', population: parseFloat(percentuais.SP.toFixed(2)), color: '#3498db', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'RJ', population: parseFloat(percentuais.RJ.toFixed(2)), color: '#1abc9c', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'MG', population: parseFloat(percentuais.MG.toFixed(2)), color: '#f39c12', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'ES', population: parseFloat(percentuais.ES.toFixed(2)), color: '#9b59b6', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'OUTROS', population: parseFloat(percentuais.OUTROS.toFixed(2)), color: '#e74c3c', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ] : [];

  return (
    <ImageBackground
      source={require('../img/f01.jpg')} // Caminho para a imagem de fundo
      style={styles.backgroundImage}
      imageStyle={{ opacity: 0.3 }} // Clarear a imagem de fundo
    >
      <View style={styles.container}>
        {/* Vídeo */}
        <View style={styles.videoContainer}>
          <YoutubeIframe
            height={screenHeight * 0.25}
            width={screenWidth * 0.9}
            videoId={'Q1xQuCpYIFE'}
          />
        </View>

        {/* Resultados e gráfico de pizza */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {soma !== null && (
            <View style={styles.resultContainer}>
              <View style={styles.resultHeader}>
                <Icon name="info" size={24} color="#3498db" style={styles.detailsIcon} onPress={abrirModalExplicacao} />
                <Text style={styles.resultTitle}>Resultado da Soma:</Text>
              </View>
              <Text style={styles.resultText}>{soma}</Text>
            </View>
          )}

          {percentuais && (
            <View>
              <View style={styles.resultHeader}>
                <Icon name="info" size={24} color="#3498db" style={styles.detailsIcon} onPress={abrirModalExplicacao} />
                <Text style={[styles.resultTitle, styles.centeredText]}>Cálculo do Percentual:</Text>
              </View>
              <PieChart
                data={dataPieChart}
                width={screenWidth}
                height={220}
                chartConfig={{
                  backgroundColor: '#ffffff',
                  backgroundGradientFrom: '#ffffff',
                  backgroundGradientTo: '#ffffff',
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
              />
            </View>
          )}

          {stringInvertida && (
            <View style={styles.resultContainer}>
              <View style={styles.resultHeader}>
                <Icon name="info" size={24} color="#3498db" style={styles.detailsIcon} onPress={abrirModalExplicacao} />
                <Text style={styles.resultTitle}>String Invertida:</Text>
              </View>
              <Text style={styles.resultText}>{stringInvertida}</Text>
            </View>
          )}
        </ScrollView>

        {/* Botões */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={obterSoma}>
            <Icon name="add-circle" size={50} color="#3498db" style={styles.icon} />
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Calcular Soma</Text>
              <Text style={styles.descriptionText}>Some números consecutivos.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={obterPercentuais}>
            <Icon name="pie-chart" size={50} color="#3498db" style={styles.icon} />
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Calcular Percentual</Text>
              <Text style={styles.descriptionText}>Veja os percentuais dos estados.</Text>
            </View>
          </TouchableOpacity>

          {/* Botão para Questão 3 */}
          <TouchableOpacity style={styles.optionButton} onPress={abrirModalInverterString}>
            <Icon name="rotate-left" size={50} color="#3498db" style={styles.icon} />
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Inverter String</Text>
              <Text style={styles.descriptionText}>Inverte uma string de exemplo.</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Modal para explicação da lógica */}
        <Modal animationType="slide" transparent={true} visible={detailsVisible} onRequestClose={() => setDetailsVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Lógica do Desafio</Text>
              <Text style={styles.modalText}>
                {soma !== null ? 'Somamos números consecutivos de 1 a 13.' : percentuais !== null ? 'O percentual é calculado dividindo o faturamento por 100.' : 'Invertemos a string digitada.'}
              </Text>
              <TouchableOpacity style={styles.closeButton} onPress={() => setDetailsVisible(false)}>
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Modal de entrada de string para inversão */}
        <Modal animationType="slide" transparent={true} visible={inputModalVisible} onRequestClose={() => setInputModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Digite a string para inverter:</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Digite aqui..."
                value={userInput}
                onChangeText={text => setUserInput(text)}
              />
              {/* Botão de Inverter (Verde) */}
              <TouchableOpacity style={[styles.actionButton, styles.inverterButton]} onPress={inverterString}>
                <Text style={styles.closeButtonText}>Inverter</Text>
              </TouchableOpacity>
              {/* Botão de Cancelar */}
              <TouchableOpacity style={styles.actionButton} onPress={() => setInputModalVisible(false)}>
                <Text style={styles.closeButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollContent: {
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  videoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  resultContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
    marginLeft: 5,
  },
  resultText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3498db',
  },
  detailsIcon: {
    marginRight: 5,
  },
  centeredText: {
    textAlign: 'center',
  },
  buttonContainer: {
    paddingVertical: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
  },
  buttonContent: {
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
  },
  descriptionText: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#3498db',
    borderRadius: 15,
    padding: 25,
    width: '85%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
    width: '100%',
    fontSize: 16,
  },
  actionButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 10,
  },
  inverterButton: {
    backgroundColor: '#2ecc71',
  },
});

export default HomeScreen;

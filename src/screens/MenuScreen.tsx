import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import ResultModal from '../components/ResultModal';
import { useFocusEffect } from '@react-navigation/native';

const MenuScreen: React.FC = () => {
  const [soma, setSoma] = useState<number | null>(null);
  const [percentuais, setPercentuais] = useState<any>(null);
  const [stringInvertida, setStringInvertida] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const resetData = () => {
    setSoma(null);
    setPercentuais(null);
    setStringInvertida(null);
    setActiveModal(null);
    setModalVisible(false);
  };

  useFocusEffect(
    useCallback(() => {
      resetData();
    }, [])
  );

  const obterSoma = () => {
    resetData();
    axios.get('http://10.0.2.2:3000/questao1')
      .then(response => {
        setSoma(response.data.soma);
        setActiveModal('soma');
        setModalVisible(true);
      })
      .catch(error => console.error(error));
  };

  const obterPercentuais = () => {
    resetData();
    axios.get('http://10.0.2.2:3000/questao2')
      .then(response => {
        setPercentuais(response.data);
        setActiveModal('percentuais');
        setModalVisible(true);
      })
      .catch(error => console.error(error));
  };

  const inverterString = () => {
    resetData();
    axios.get('http://10.0.2.2:3000/questao3')
      .then(response => {
        setStringInvertida(response.data.invertida);
        setActiveModal('inversao');
        setModalVisible(true);
      })
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={obterSoma}>
        <Text style={styles.buttonText}>Calcular Soma</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={obterPercentuais}>
        <Text style={styles.buttonText}>Calcular Percentual</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={inverterString}>
        <Text style={styles.buttonText}>Inverter String</Text>
      </TouchableOpacity>

      {/* Exibição dos resultados */}
      {activeModal === 'inversao' && stringInvertida && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>String Invertida:</Text>
          <Text style={styles.resultText}>{stringInvertida}</Text>
        </View>
      )}

      {/* Modal de Resultados */}
      <ResultModal
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        activeModal={activeModal}
        soma={soma}
        percentuais={percentuais}
        stringInvertida={stringInvertida}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resultContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default MenuScreen;

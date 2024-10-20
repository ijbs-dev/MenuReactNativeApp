// src/components/ResultModal.tsx

import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Percentuais {
  SP: number;
  RJ: number;
  MG: number;
  ES: number;
  OUTROS: number;
}

interface ResultModalProps {
  modalVisible: boolean;
  closeModal: () => void;
  activeModal: string | null;
  soma: number | null;
  percentuais: Percentuais | null;
  stringInvertida: string | null;
}

const ResultModal: React.FC<ResultModalProps> = ({
  modalVisible,
  closeModal,
  activeModal,
  soma,
  percentuais,
  stringInvertida,
}) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const logicExplanation = {
    soma: 'Somamos números consecutivos de 1 a 13.',
    percentuais: 'O percentual é calculado dividindo o faturamento por 100.',
    inversao: 'A string foi invertida manualmente percorrendo-a de trás para frente e concatenando cada caractere.',
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Renderiza o resultado da soma */}
          {activeModal === 'soma' && soma !== null && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultTitle}>Resultado da Soma:</Text>
              <Text style={styles.resultText}>{soma}</Text>
            </View>
          )}

          {/* Renderiza os percentuais */}
          {activeModal === 'percentuais' && percentuais !== null && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultTitle}>Percentuais de Faturamento:</Text>
              <Text>SP: {percentuais.SP.toFixed(2)}%</Text>
              <Text>RJ: {percentuais.RJ.toFixed(2)}%</Text>
              <Text>MG: {percentuais.MG.toFixed(2)}%</Text>
              <Text>ES: {percentuais.ES.toFixed(2)}%</Text>
              <Text>OUTROS: {percentuais.OUTROS.toFixed(2)}%</Text>
            </View>
          )}

          {/* Renderiza o resultado da inversão da string */}
          {activeModal === 'inversao' && stringInvertida !== null && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultTitle}>String Invertida:</Text>
              <Text style={styles.resultText}>{stringInvertida}</Text>
            </View>
          )}

          {/* Ícone de explicação */}
          <TouchableOpacity style={styles.detailsIcon} onPress={() => setDetailsVisible(true)}>
            <Icon name="info" size={28} color="#fff" />
          </TouchableOpacity>

          {/* Modal da explicação lógica */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={detailsVisible}
            onRequestClose={() => setDetailsVisible(false)}
          >
            <View style={styles.detailsModalContainer}>
              <View style={styles.detailsModalContent}>
                <Text style={styles.detailsTitle}>Lógica do Desafio</Text>
                <Text style={styles.detailsText}>
                  {activeModal === 'soma' ? logicExplanation.soma : activeModal === 'percentuais' ? logicExplanation.percentuais : logicExplanation.inversao}
                </Text>
                <TouchableOpacity style={styles.closeButton} onPress={() => setDetailsVisible(false)}>
                  <Text style={styles.buttonText}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Botão para fechar o modal */}
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Voltar ao Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  resultContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  resultTitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 26,
    color: '#000',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  detailsIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  detailsModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  detailsModalContent: {
    backgroundColor: '#000',
    borderRadius: 15,
    padding: 25,
    width: '85%',
    alignItems: 'center',
  },
  detailsTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
  },
  detailsText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ResultModal;

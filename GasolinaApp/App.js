import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import styles from "./src/styles/Stylesheet";
import PrimeiraImagem from "./src/components/ImageOne";
import SegundaImagem from "./src/components/ImageTwo";

const App = () => {
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [recomendacao, setRecomendacao] = useState("");

  const calcularCombustivel = () => {
    const razao = parseFloat(alcool) / parseFloat(gasolina);
    const mensagem = razao < 0.7 ? "Álcool" : "Gasolina";
    setRecomendacao(mensagem);
    setModalVisible(true);
  };

  const calcularNovamente = () => {
    setAlcool("");
    setGasolina("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <PrimeiraImagem />
      <Text style={styles.txtlogo}>Qual melhor opção?</Text>
      <Text style={styles.label}>Álcool (preço por litro):</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAlcool(text)}
        value={alcool}
        keyboardType="numeric"
      />
      <Text style={styles.label2}>Gasolina (preço por litro):</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setGasolina(text)}
        value={gasolina}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={calcularCombustivel}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <SegundaImagem />
          <Text style={styles.modalText1}>Recomendação: {recomendacao}</Text>

          <Text style={styles.modalTitle2}>Com os preços:</Text>
          <Text style={styles.modalText2}>Preço do Álcool: R$ {alcool}</Text>
          <Text style={styles.modalText3}>
            Preço da Gasolina: R$ {gasolina}
          </Text>

          <TouchableOpacity style={styles.button2} onPress={calcularNovamente}>
            <Text style={styles.buttonText2}>Calcular Novamente</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default App;

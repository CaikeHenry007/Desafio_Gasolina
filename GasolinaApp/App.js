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
import Textos from "./src/components/Text";

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
      <Textos estilo={styles.txtlogo} texto="Qual melhor opção?" />
      <Textos estilo={styles.label} texto="Àlcool (Preço por litro):" />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setAlcool(text)}
        value={alcool}
        keyboardType="numeric"
      />
      <Textos estilo={styles.label2} texto="Gasolina (Preço por litro):" />
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

          <Textos
            estilo={styles.modalText1}
            texto={`Recomendacao: ${recomendacao}`}
          />

          <Textos estilo={styles.modalTitle2} texto="Com os preços:" />

          <Textos
            estilo={styles.modalText2}
            texto={`Preço do Àlcool : R$ ${alcool}`}
          />
          <Textos
            estilo={styles.modalText3}
            texto={`Preço da Gasolina : R$ ${gasolina}`}
          />
          <TouchableOpacity style={styles.button2} onPress={calcularNovamente}>
            <Text style={styles.buttonText2}>Calcular Novamente</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default App;

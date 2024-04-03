// Importando os componentes
import { View, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "../styles/Stylesheet";
import PrimeiraImagem from "../components/ImageOne";
import Textos from "../components/Text";
import Botao from "../components/ButtonComponent";
import ModalTela from "../components/Modal";
import Imagem from "../components/ImageOne";

// Criar uma página HOME
// Para as imagens e botões, apenas um Component.

const Home = () => {
  // Criando as constantes
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [recomendacao, setRecomendacao] = useState("");

  // Função de calcular qual combustível compensa
  const calcularCombustivel = () => {
    const razao = parseFloat(alcool) / parseFloat(gasolina);
    const mensagem = razao < 0.7 ? "Álcool" : "Gasolina";
    setRecomendacao(mensagem);
    setModalVisible(true);
  };

  // Função para ir calcular novamente
  const calcularNovamente = () => {
    setAlcool("");
    setGasolina("");
    setModalVisible(false);
  };

  return (
    // Página principal
    <View style={styles.container}>
      <Imagem
        style={styles.logo}
        imgsource={require("../assets/images/logo.png")}
      />
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
      <Botao
        style={styles.button2}
        text="Calcular"
        styletexto={styles.buttonText2}
        ButtonValue={calcularCombustivel}
      />

      {/* Página do Modal */}
      <ModalTela
        animacao="slide"
        transparencian={true}
        visivel={modalVisible}
        ButtonValue={calcularNovamente}
        recomended={`Recomendação: ${recomendacao}`}
        etanol={`Álcool: R$ ${alcool}`}
        gas={`Gasolina: R$ ${gasolina}`}
        setModal={() => {
          setModalVisible(false);
        }}
      />
    </View>
  );
};

export default Home;

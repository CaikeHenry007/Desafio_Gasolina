// Importando os componentes
import { View, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./src/styles/Stylesheet";
import PrimeiraImagem from "./src/components/ImageOne";
import Textos from "./src/components/Text";
import Botao from "./src/components/ButtonComponent";
import ModalTela from "./src/components/Modal";

const App = () => {
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
      <Botao ButtonValue={calcularCombustivel} />

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

export default App;

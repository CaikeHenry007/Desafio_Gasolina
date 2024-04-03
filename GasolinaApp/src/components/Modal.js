// Importando os componentes
import { Modal, View } from "react-native";
import Textos from "./Text";
import styles from "../styles/Stylesheet";
import Botao from "./ButtonComponent";
import Imagem from "./ImageOne";

// Página do Modal
export default function ModalTela({
  animacao,
  transparencian,
  visivel,
  ButtonValue,
  recomended,
  etanol,
  gas,
  setModal,
}) {
  return (
    <Modal
      animationType={animacao}
      transparent={transparencian}
      visible={visivel}
      onRequestClose={setModal}
    >
      <View style={styles.modalContainer}>
        <Imagem
          style={styles.logo}
          imgsource={require("../assets/images/gas.png")}
        />

        <Textos estilo={styles.modalText1} texto={recomended} />

        <Textos estilo={styles.modalTitle2} texto="Com os preços:" />

        <Textos estilo={styles.modalText2} texto={etanol} />
        <Textos estilo={styles.modalText3} texto={gas} />
        <Botao
          style={styles.button}
          text="Calcular Novamente!"
          styletexto={styles.buttonText}
          ButtonValue={ButtonValue}
        />
      </View>
    </Modal>
  );
}

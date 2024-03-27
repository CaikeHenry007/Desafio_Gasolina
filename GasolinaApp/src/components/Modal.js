// Importando os componentes
import { Modal, View } from "react-native";
import Textos from "./Text";
import SegundaImagem from "./ImageTwo";
import styles from "../styles/Stylesheet";
import BotaoModal from "./ButtonModalComponent";

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
        <SegundaImagem />

        <Textos estilo={styles.modalText1} texto={recomended} />

        <Textos estilo={styles.modalTitle2} texto="Com os preços:" />

        <Textos estilo={styles.modalText2} texto={etanol} />
        <Textos estilo={styles.modalText3} texto={gas} />
        <BotaoModal ButtonValueModal={ButtonValue} />
      </View>
    </Modal>
  );
}

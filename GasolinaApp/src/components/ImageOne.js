// Imagem da página principal
import { Image } from "react-native";
import styles from "../styles/Stylesheet";

export default function PrimeiraImagem() {
  return (
    <Image source={require("../assets/images/logo.png")} style={styles.logo} />
  );
}

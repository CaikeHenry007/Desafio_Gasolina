import { Image, View } from "react-native";
import styles from "../styles/Stylesheet";

export default function SegundaImagem() {
  return (
    <Image source={require("../assets/images/gas.png")} style={styles.logo} />
  );
}

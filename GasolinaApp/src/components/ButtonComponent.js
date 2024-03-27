// Botão da página principal
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/Stylesheet";

export default function Botao({ ButtonValue }) {
  return (
    <TouchableOpacity style={styles.button} onPress={ButtonValue}>
      <Text style={styles.buttonText}>Calcular</Text>
    </TouchableOpacity>
  );
}

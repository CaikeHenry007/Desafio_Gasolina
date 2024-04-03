// Botão da página principal
import { TouchableOpacity, Text } from "react-native";

export default function Botao({ ButtonValue, style, text, styletexto }) {
  return (
    <TouchableOpacity style={style} onPress={ButtonValue}>
      <Text style={styletexto}>{text}</Text>
    </TouchableOpacity>
  );
}

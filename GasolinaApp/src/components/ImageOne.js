// Imagem da página principal
import { Image } from "react-native";

export default function Imagem({ style, imgsource }) {
  return <Image source={imgsource} style={style} />;
}

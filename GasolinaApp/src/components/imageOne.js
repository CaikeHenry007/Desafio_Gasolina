import { Image, View } from "react-native";
import estilos from "../styles/Stylesheet";

export default function PrimeiraImagem() {



    return (
        <Image source={require('../assets/images/logo.png')} style={estilos.logo}
        />

    )
}
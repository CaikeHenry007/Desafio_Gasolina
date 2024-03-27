import { TouchableOpacity, View, Text } from "react-native";
import styles from "../styles/Stylesheet";

export default function BotaoModal({ ButtonValueModal }) {



    return (

        <TouchableOpacity style={styles.button2} onPress={ButtonValueModal}>
            <Text style={styles.buttonText2}>Calcular Novamente</Text>
        </TouchableOpacity>
    )
}
import { Text, View } from "react-native";
import estilos from "./src/styles/Stylesheet";
import PrimeiraImagem from "./src/components/imageOne";

export default function App() {



  return (
    <View style={estilos.container}>
      <PrimeiraImagem />

      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

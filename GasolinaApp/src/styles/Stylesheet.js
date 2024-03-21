import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    height: 170,
    width: 170,
    borderRadius: 107,
    borderWidth: 2,
    borderColor: "black",
  },

  txtlogo: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "2%",
  },

  label: {
    marginTop: "5%",
    color: "white",
    fontSize: 20,
    marginVertical: 10,
  },

  label2: {
    color: "white",
    fontSize: 20,
    marginVertical: 10,
  },

  input: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  modalContainer: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  modalText1: {
    color: "lime",
    fontSize: 35,
    marginVertical: 10,
    fontWeight: "bold",
  },

  modalText2: {
    color: "white",
    fontSize: 20,
    marginVertical: 10,
  },

  modalText3: {
    color: "white",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.fundoSuave,
    justifyContent: "center",
    alignItems: "center",
    padding: 25
  },

  logo: {
    width: 180,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.primaria,
    marginBottom: 30
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd"
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.primaria,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold"
  },

  forgot: {
    marginTop: 15,
    color: Colors.secundaria,
    fontSize: 14
  },
  register: {
    marginTop: 20,
    fontSize: 14,
    color: "#555",
    textAlign: "center"
  },

registerBold: {
  color: "#204181",
  fontWeight: "bold",
},

});
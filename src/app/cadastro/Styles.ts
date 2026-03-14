import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({

  container: {
    padding: 20,
    backgroundColor: Colors.fundoSuave
  },

  logo: {
    width: 160,
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primaria,
    textAlign: "center",
    marginBottom: 20
  },

  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4
  },

  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12
  },

  button: {
    backgroundColor: Colors.primaria,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },

  loginLink: {
    textAlign: "center",
    marginTop: 20,
    color: Colors.secundaria,
    fontWeight: "bold"
  }

});
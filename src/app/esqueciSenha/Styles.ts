import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: Colors.fundoSuave
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primaria,
    textAlign: "center",
    marginBottom: 10
  },

  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 30
  },

  input: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd"
  },

  button: {
    backgroundColor: Colors.primaria,
    padding: 15,
    borderRadius: 12,
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
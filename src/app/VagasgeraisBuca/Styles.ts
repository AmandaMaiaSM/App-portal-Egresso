import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
   
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primaria,
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },

  infoPrincipal: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  avatarEmpresa: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#E8EDF5",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarTexto: {
    fontWeight: "bold",
    color: Colors.primaria,
  },

  tituloVaga: {
    fontWeight: "bold",
    color: Colors.primaria,
  },

  empresa: {
    fontSize: 12,
    color: "#666",
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

  tag: {
    backgroundColor: "#E8EDF5",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginRight: 6,
    fontSize: 11,
  },

  acoes: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  salario: {
    color: Colors.sucesso,
    fontWeight: "bold",
  },

  botao: {
    backgroundColor: Colors.primaria,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 6,
  },

  botaoTexto: {
    color: "white",
    fontWeight: "600",
  },

  semResultado: {
    textAlign: "center",
    marginTop: 40,
    color: "#777",
  },
});
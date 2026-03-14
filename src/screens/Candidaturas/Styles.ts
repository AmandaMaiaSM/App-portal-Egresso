import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    marginBottom: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.primaria,
  },

  descricao: {
    fontSize: 13,
    marginTop: 4,
    color: "#666",
  },

  input: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 18,
    minHeight: 96,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "flex-start",
    elevation: 2,
  },

  infoPrincipal: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
    minWidth: 0,
  },

  textosContainer: {
    flex: 1,
    minWidth: 0,
  },

  avatarEmpresa: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#E8EDF5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  avatarTexto: {
    fontWeight: "bold",
    color: Colors.primaria,
  },

  cargo: {
    fontWeight: "bold",
    flexShrink: 1,
  },

  empresa: {
    fontSize: 12,
    color: "#666",
    flexShrink: 1,
  },

  statusBadge: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    minWidth: 116,
    alignItems: "center",
    alignSelf: "flex-start",
  },

  statusTexto: {
    fontSize: 12,
    fontWeight: "bold",
  },

  candidato: {
    backgroundColor: "#E8EDF5",
  },

  selecionado: {
    backgroundColor: "#FFF4D6",
  },

  contratado: {
    backgroundColor: "#E8F5E9",
  },

  recusado: {
    backgroundColor: "#FDECEC",
  },

});
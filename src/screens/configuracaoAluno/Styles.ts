import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({

  container:{
    flex:1,
    padding:20
  },

  header:{
    marginBottom:20
  },

  titulo:{
    fontSize:22,
    fontWeight:"bold",
    color:Colors.primaria
  },

  subtitulo:{
    color:"#666",
    marginTop:4
  },

  feedback:{
    backgroundColor:"#E8EDF5",
    padding:10,
    borderRadius:6,
    marginBottom:20
  },

  card:{
    backgroundColor:"white",
    padding:16,
    borderRadius:12,
    marginBottom:16,
    elevation:2
  },

  cardTitulo:{
    fontWeight:"bold",
    color:Colors.primaria,
    marginBottom:10
  },

  input:{
    backgroundColor:"#F2F2F2",
    padding:10,
    borderRadius:8,
    marginBottom:10
  },

  toggleRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

  toggleTitulo:{
    fontWeight:"600"
  },

  toggleDescricao:{
    fontSize:12,
    color:"#666"
  },

  btnSalvar:{
    backgroundColor:Colors.sucesso,
    padding:12,
    borderRadius:8,
    alignItems:"center"
  },

  btnSalvarTexto:{
    color:"white",
    fontWeight:"bold"
  },

  btnOutline:{
    borderWidth:2,
    borderColor:Colors.primaria,
    padding:12,
    borderRadius:8,
    alignItems:"center"
  },

  btnOutlineTexto:{
    color:Colors.primaria,
    fontWeight:"bold"
  },

  cardDanger:{
    borderWidth:1,
    borderColor:Colors.secundaria,
    padding:16,
    borderRadius:12,
    marginBottom:30
  },

  tituloDanger:{
    color:Colors.secundaria,
    fontWeight:"bold",
    marginBottom:8
  },

  textoDanger:{
    color:"#666",
    marginBottom:10
  },

  btnDanger:{
    borderWidth:2,
    borderColor:Colors.secundaria,
    padding:12,
    borderRadius:8,
    alignItems:"center"
  },

  btnDangerTexto:{
    color:Colors.secundaria,
    fontWeight:"bold"
  }

});
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
    fontSize:24,
    fontWeight:"bold",
    color:Colors.primaria
  },

  subtitulo:{
    color:"#666",
    marginTop:4
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

  textarea:{
    backgroundColor:"#F9FAFC",
    borderRadius:10,
    padding:10,
    minHeight:120,
    textAlignVertical:"top"
  },

  contador:{
    alignSelf:"flex-end",
    fontSize:12,
    color:"#888"
  },

  skillsContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginBottom:10
  },

  skillTag:{
    backgroundColor:Colors.primaria,
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:10,
    paddingVertical:6,
    borderRadius:20,
    marginRight:8,
    marginBottom:8
  },

  skillText:{
    color:"white",
    marginRight:6
  },

  remove:{
    color:"white",
    fontSize:16
  },

  addSkillRow:{
    flexDirection:"row",
    alignItems:"center",
    gap:10
  },

  addButton:{
    backgroundColor:Colors.primaria,
    padding:10,
    borderRadius:8
  },

  btnPdf:{
    borderWidth:2,
    borderColor:Colors.primaria,
    padding:10,
    borderRadius:8,
    alignItems:"center"
  },

  info:{
    color:"#666",
    marginBottom:10
  },

  btnPdfTexto:{
    color:Colors.primaria,
    fontWeight:"bold"
  },

  btnSalvar:{
    backgroundColor:Colors.sucesso,
    padding:14,
    borderRadius:10,
    alignItems:"center",
    marginBottom:30
  },

  btnSalvarTexto:{
    color:"white",
    fontWeight:"bold"
  }

});
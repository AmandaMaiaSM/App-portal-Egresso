import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

export default function Header() {
  const navigation = useNavigation<DrawerNavigationProp<Record<string, object | undefined>>>();

  function abrirMenu() {
    navigation.openDrawer();
    
  }
  
  const listaNotificacoes = [
  { id: 1, mensagem: "Nova vaga disponível" },
  { id: 2, mensagem: "Empresa visualizou seu perfil" },
  { id: 3, mensagem: "Você foi indicado para uma vaga" }
  ];

  const notificacoes = listaNotificacoes.length;

  return (

    
    <View style={styles.container}>
      
      {/* Menu */}
      <TouchableOpacity onPress={abrirMenu}>
        <Ionicons name="menu" size={28} color="white" />
      </TouchableOpacity>

      {/* Busca */}
      <View style={styles.search}>
        <Ionicons name="search" size={18} color="gray" />
        <TextInput
          placeholder="Search..."
          style={styles.input}
        />
      </View>

      {/* Notificação */}
      <TouchableOpacity style={styles.notification} onPress={() => navigation.navigate("Notificacoes")}>
        <Ionicons name="notifications-outline" size={24} color="white" />

        {notificacoes > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notificacoes}</Text>
          </View>
        )}
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaria,
    height: 90,
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  search: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 20,
    width: 180,
    height: 35,
  },

  input: {
    marginLeft: 5,
    flex: 1,
  },
  notification: {
    position: "relative"
  },

  badge: {
    position: "absolute",
    top: -5,
    right: -8,
    backgroundColor: "red",
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center"
  },

  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold"
  },

});
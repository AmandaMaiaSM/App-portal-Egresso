import { View, Text, FlatList, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Styles";

export default function Notificacoes() {
  const navigation = useNavigation();

  const notificacoes = [
    { id: "1", mensagem: "Nova vaga disponível para seu curso" },
    { id: "2", mensagem: "Empresa XP visualizou seu perfil" },
    { id: "3", mensagem: "Você foi indicado para uma vaga" },
    { id: "4", mensagem: "Nova oportunidade de estágio no IEMA" }
  ];

  function renderItem({ item }: any) {
    return (
      <View style={styles.item}>
        <Text>{item.mensagem}</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>

      {/* Barra superior */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#204181" />
        </TouchableOpacity>

        <Text style={styles.title}>Notificações</Text>
      </View>

      {/* Lista */}
      <View style={styles.container}>
        <FlatList
          data={notificacoes}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>

    </KeyboardAvoidingView>
  );
}
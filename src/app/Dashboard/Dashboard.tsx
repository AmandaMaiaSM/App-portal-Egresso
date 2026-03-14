import { View, ScrollView, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import CarrosselHome from "@/components/CarrosselHome/Index";
import VagasgeraisBusca from "../VagasgeraisBuca/VagasgeraisBusca";
import { Colors } from "@/constants/Colors";
import { styles } from "./Styles";


export default function Dashboard() {

  const usuario = {
    nome: "Juerema"
  };

  const noticias = [
    { id: 1, titulo: "Novo evento de tecnologia no IEMA" },
    { id: 2, titulo: "Empresas parceiras estão contratando" },
    { id: 3, titulo: "Feira de estágio acontecerá semana que vem" }
  ];

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Perfil */}
        <View style={styles.profileCard}>
          <Ionicons name="person-circle-outline" size={50} color="white" />

          <View>
            <Text style={styles.profileName}>
              Olá, {usuario.nome} 
            </Text>

            <Text style={styles.profileSub}>
              Veja as oportunidades para você
            </Text>
          </View>
        </View>

        {/* Carrossel */}
        <CarrosselHome />
        <VagasgeraisBusca />

        {/* Notícias */}

      </ScrollView>

    </SafeAreaView>
  );
}
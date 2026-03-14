import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fundoSuave,
  },

  // Card de Perfil (Topo)
  profileCard: {
    backgroundColor: Colors.primaria,
    marginHorizontal: 16,
    marginTop: 16, // Espaço em relação ao topo da tela
    marginBottom: 20, // Distância padrão para o próximo elemento (Carrossel)
    borderRadius: 15,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    // Sombra leve para dar profundidade
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  profileName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  profileSub: {
    color: "white",
    opacity: 0.8,
    fontSize: 14,
  },

  // Estrutura das Seções (Vagas e Notícias)
  section: {
    paddingHorizontal: 16,
    marginBottom: 20, // Espaçamento uniforme entre seções
  },

  sectionTitle: {
    fontSize: 18, // Aumentei levemente para destaque
    fontWeight: "bold",
    color: Colors.primaria,
    marginBottom: 12, // Distância entre título e conteúdo
  },

  // Cards de Notícias (Lista interna)
  newsCard: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10, // Espaço entre um card de notícia e outro
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
  },

  newsText: {
    color: Colors.escura,
    fontSize: 15,
    fontWeight: "500",
  },

  // Caso use o Notification Card em algum lugar
  notificationCard: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  notificationText: {
    color: Colors.escura,
  },
});
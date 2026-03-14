import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "../../constants/Colors";
import { styles } from "../../app/PerfilAluno/Styles";

//dados fictícios para o perfil do aluno, podem ser substituídos por dados reais posteriormente
const VAGAS_RECOMENDADAS = [
  { id: 1, titulo: "Desenvolvedor Frontend", empresa: "Tech Solutions", local: "Remoto" },
  { id: 2, titulo: "UI/UX Designer", empresa: "Creative Agency", local: "São Paulo" },
  { id: 3, titulo: "Estágio em QA", empresa: "Soft House", local: "Híbrido" },
];

const MINHAS_CANDIDATURAS = [
  {
    id: 1,
    vaga: "Desenvolvedor Júnior",
    empresa: "Tech Solutions",
    data: "10/02/2026",
    periodo: "Manhã",
    status: "EM ANÁLISE",
  },
  {
    id: 2,
    vaga: "Analista de Sistemas",
    empresa: "Cloud Systems",
    data: "05/02/2026",
    periodo: "Integral",
    status: "APROVADO",
  },
  {
    id: 3,
    vaga: "Estágio em Marketing Digital",
    empresa: "Creative Agency",
    data: "01/02/2026",
    periodo: "Tarde",
    status: "REJEITADO",
  },
];

export default function PerfilAluno() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* TOPO PERFIL */}
        <View style={styles.topo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>J</Text>
          </View>

          <View>
            <Text style={styles.nome}>Jurema Silva</Text>
            <Text style={styles.badge}>Estudante de Tecnologia</Text>
          </View>
        </View>

        {/* DIVISOR */}
        <View style={styles.divisor} />

        {/* SOBRE MIM */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.titulo}>Sobre mim</Text>
            <Text style={styles.editar}>✏️ Editar</Text>
          </View>

          <Text style={styles.bio}>
            Sou estudante de Tecnologia apaixonada por desenvolvimento de
            software, com foco em backend e aplicações mobile. Estou sempre em
            busca de aprender novas ferramentas e aprimorar minhas habilidades.
          </Text>
        </View>
        {/* VAGAS RECOMENDADAS */}
        <Text style={styles.sectionTitle}>Vagas recomendadas</Text>

        <View style={styles.vagasContainer}>
          {VAGAS_RECOMENDADAS.map((vaga) => (
            <View key={vaga.id} style={styles.vagaCard}>
              <Text style={styles.vagaTitulo}>{vaga.titulo}</Text>
              <Text>{vaga.empresa}</Text>
              <Text>{vaga.local}</Text>
            </View>
          ))}
        </View>
        {/* MINHAS CANDIDATURAS */}
        <Text style={styles.sectionTitle}>Minhas candidaturas</Text>

        <View style={styles.candidaturasCard}>
          {MINHAS_CANDIDATURAS.map((item) => (
            <View key={item.id} style={styles.candidaturaLinha}>

              <View style={styles.avatarEmpresa}>
                <Text>{item.empresa.charAt(0)}</Text>
              </View>

              <View style={{flex:1}}>
                <Text style={styles.vagaTitulo}>{item.vaga}</Text>
                <Text>{item.data} • {item.periodo}</Text>
              </View>

              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>

            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}


import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../app/VagasgeraisBuca/Styles";

type Vaga = {
  id: number;
  titulo: string;
  empresa: string;
  local: string;
  tags: string[];
  salario?: string;
};

const TODAS_VAGAS: Vaga[] = [
  {
    id: 1,
    titulo: "Desenvolvedor Frontend",
    empresa: "Tech Solutions",
    local: "Remoto",
    tags: ["React", "CSS"],
    salario: "R$ 3.000",
  },
  {
    id: 2,
    titulo: "UI/UX Designer",
    empresa: "Creative Agency",
    local: "São Paulo",
    tags: ["Figma", "UI"],
    salario: "A combinar",
  },
  {
    id: 3,
    titulo: "Estágio em QA",
    empresa: "Soft House",
    local: "Híbrido",
    tags: ["Testes", "Manual"],
  },
];

export default function VagasgeraisBusca() {
  const [busca, setBusca] = useState("");

  const vagasFiltradas = TODAS_VAGAS.filter((vaga) =>
    vaga.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* TÍTULO */}
        <Text style={styles.titulo}>Vagas Gerais</Text>


        {/* LISTA DE VAGAS */}
        {vagasFiltradas.length > 0 ? (
          vagasFiltradas.map((vaga) => (
            <View key={vaga.id} style={styles.card}>

              {/* INFO PRINCIPAL */}
              <View style={styles.infoPrincipal}>
                <View style={styles.avatarEmpresa}>
                  <Text style={styles.avatarTexto}>
                    {vaga.empresa.charAt(0)}
                  </Text>
                </View>

                <View>
                  <Text style={styles.tituloVaga}>{vaga.titulo}</Text>
                  <Text style={styles.empresa}>
                    {vaga.empresa} • {vaga.local}
                  </Text>
                </View>
              </View>

              {/* TAGS */}
              <View style={styles.tagsContainer}>
                {vaga.tags.map((tag) => (
                  <Text key={tag} style={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </View>

              {/* AÇÕES */}
              <View style={styles.acoes}>
                <Text style={styles.salario}>
                  {vaga.salario ?? "A combinar"}
                </Text>

                <TouchableOpacity style={styles.botao}>
                  <Text style={styles.botaoTexto}>Candidatar-se</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.semResultado}>
            Nenhuma vaga encontrada
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
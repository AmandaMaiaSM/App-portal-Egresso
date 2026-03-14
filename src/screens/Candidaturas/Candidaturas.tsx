import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./Styles";

type Status =
  | "candidato"
  | "selecionado"
  | "contratado"
  | "recusado";

type Candidatura = {
  id: number;
  empresa: string;
  cargo: string;
  status: Status;
  data: string;
};

export default function MinhasCandidaturas() {
  const [termoBusca, setTermoBusca] = useState("");

  const minhasVagas: Candidatura[] = [
    {
      id: 1,
      empresa: "Tech Solutions",
      cargo: "Desenvolvedor Frontend",
      status: "selecionado",
      data: "20/02/2026",
    },
    {
      id: 2,
      empresa: "Cloud Systems",
      cargo: "Estágio Backend",
      status: "candidato",
      data: "25/02/2026",
    },
    {
      id: 3,
      empresa: "InovaTech",
      cargo: "Analista de Dados",
      status: "recusado",
      data: "28/02/2026",
    },
  ];

  const statusLabel: Record<Status, string> = {
    candidato: "CANDIDATO",
    selecionado: "SELECIONADO",
    contratado: "CONTRATADO",
    recusado: "RECUSADO",
  };

  const vagasFiltradas = minhasVagas.filter((vaga) =>
    vaga.empresa.toLowerCase().includes(termoBusca.toLowerCase()) ||
    vaga.cargo.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.titulo}>Minhas Candidaturas</Text>
          <Text style={styles.descricao}>
            Acompanhe o status dos processos seletivos que você participa.
          </Text>
        </View>


        {/* LISTA */}
        {vagasFiltradas.map((item) => (
          <View key={item.id} style={styles.card}>

            <View style={styles.infoPrincipal}>

              <View style={styles.avatarEmpresa}>
                <Text style={styles.avatarTexto}>
                  {item.empresa.charAt(0)}
                </Text>
              </View>

              <View style={styles.textosContainer}>
                <Text style={styles.cargo} numberOfLines={2}>
                  {item.cargo}
                </Text>
                <Text style={styles.empresa} numberOfLines={1}>
                  {item.empresa} • Inscrito em {item.data}
                </Text>

                <View style={[
                  styles.statusBadge,
                  styles[item.status]
                ]}>
                  <Text style={styles.statusTexto}>
                    {statusLabel[item.status]}
                  </Text>
                </View>
              </View>

            </View>

          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}
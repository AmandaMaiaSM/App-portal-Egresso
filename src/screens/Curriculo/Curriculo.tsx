import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Styles";


export default function Curriculo() {

  const [perfil, setPerfil] = useState({
    nome: "Nome do Usuário",
    curso: "Técnico em Informática",
    biografia:
      "Biografia resumida do aluno. Aqui entra uma breve descrição profissional.",
    habilidades: ["React", "JavaScript", "CSS", "Node.js"],
    telefone: "(98) 98888-8888",
    endereco: "São Luís, MA"
  });

  const [novaSkill, setNovaSkill] = useState("");

  const adicionarSkill = () => {
    if (novaSkill && !perfil.habilidades.includes(novaSkill)) {
      setPerfil({
        ...perfil,
        habilidades: [...perfil.habilidades, novaSkill]
      });
      setNovaSkill("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.titulo}>Meu Currículo</Text>
          <Text style={styles.subtitulo}>
            Mantenha seus dados atualizados para atrair melhores oportunidades.
          </Text>
        </View>

        {/* DADOS PESSOAIS */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Dados Pessoais</Text>

          <TextInput
            style={styles.input}
            value={perfil.nome}
            editable={false}
          />

          <TextInput
            style={styles.input}
            value={perfil.curso}
            editable={false}
          />

          <TextInput
            style={styles.input}
            value={perfil.telefone}
            onChangeText={(texto) =>
              setPerfil({ ...perfil, telefone: texto })
            }
          />

          <TextInput
            style={styles.input}
            value={perfil.endereco}
            onChangeText={(texto) =>
              setPerfil({ ...perfil, endereco: texto })
            }
          />
        </View>

        {/* SOBRE MIM */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Sobre mim</Text>

          <TextInput
            multiline
            maxLength={600}
            style={styles.textarea}
            value={perfil.biografia}
            onChangeText={(texto) =>
              setPerfil({ ...perfil, biografia: texto })
            }
          />

          <Text style={styles.contador}>
            {perfil.biografia.length}/600
          </Text>
        </View>

        {/* HABILIDADES */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>
            Habilidades e Competências
          </Text>

          <View style={styles.skillsContainer}>
            {perfil.habilidades.map((skill) => (
              <View key={skill} style={styles.skillTag}>
                <Text style={styles.skillText}>{skill}</Text>

                <TouchableOpacity
                  onPress={() =>
                    setPerfil({
                      ...perfil,
                      habilidades: perfil.habilidades.filter(
                        (s) => s !== skill
                      )
                    })
                  }
                >
                  <Text style={styles.remove}>×</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={styles.addSkillRow}>
            <TextInput
              placeholder="Ex: Python, Figma..."
              value={novaSkill}
              onChangeText={setNovaSkill}
              style={styles.input}
            />

            <TouchableOpacity
              style={styles.addButton}
              onPress={adicionarSkill}
            >
              <Text style={{ color: "white" }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* GERAR PDF */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>
            Currículo Profissional
          </Text>

          <Text style={styles.info}>
            Gere uma versão em PDF pronta para impressão.
          </Text>

          <TouchableOpacity style={styles.btnPdf}>
            <Text style={styles.btnPdfTexto}>
              📄 Gerar Currículo em PDF
            </Text>
          </TouchableOpacity>
        </View>

        {/* BOTÃO SALVAR */}
        <TouchableOpacity style={styles.btnSalvar}>
          <Text style={styles.btnSalvarTexto}>
            Salvar Alterações
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}
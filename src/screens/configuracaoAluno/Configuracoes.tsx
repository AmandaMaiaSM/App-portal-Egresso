import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Switch
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./Styles";

export default function Configuracoes() {

  const [dadosUsuario, setDadosUsuario] = useState({
    email: "usuario@email.com",
    celular: "(98) 98888-8888",
    notificacoes: true,
  });

  const [senhas, setSenhas] = useState({
    atual: "",
    nova: "",
    confirmar: "",
  });

  const [mensagem, setMensagem] = useState<string | null>(null);

  const salvarAcesso = () => {
    setMensagem("Dados de acesso atualizados com sucesso.");
  };

  const alterarSenha = () => {
    if (senhas.nova !== senhas.confirmar) {
      setMensagem("As novas senhas não coincidem.");
      return;
    }

    setMensagem("Senha alterada com sucesso.");

    setSenhas({
      atual: "",
      nova: "",
      confirmar: "",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.titulo}>Configurações da Conta</Text>
          <Text style={styles.subtitulo}>
            Gerencie suas informações de acesso, segurança e preferências.
          </Text>
        </View>

        {mensagem && (
          <View style={styles.feedback}>
            <Text>{mensagem}</Text>
          </View>
        )}

        {/* CONTA E ACESSO */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Conta e Acesso</Text>

          <TextInput
            style={styles.input}
            value={dadosUsuario.email}
            onChangeText={(texto) =>
              setDadosUsuario({ ...dadosUsuario, email: texto })
            }
          />

          <TextInput
            style={styles.input}
            value={dadosUsuario.celular}
            onChangeText={(texto) =>
              setDadosUsuario({ ...dadosUsuario, celular: texto })
            }
          />

          <TouchableOpacity
            style={styles.btnSalvar}
            onPress={salvarAcesso}
          >
            <Text style={styles.btnSalvarTexto}>
              Salvar alterações
            </Text>
          </TouchableOpacity>
        </View>

        {/* PREFERÊNCIAS */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Preferências</Text>

          <View style={styles.toggleRow}>
            <View>
              <Text style={styles.toggleTitulo}>
                Notificações por e-mail
              </Text>
              <Text style={styles.toggleDescricao}>
                Receba avisos sobre vagas e candidaturas.
              </Text>
            </View>

            <Switch
              value={dadosUsuario.notificacoes}
              onValueChange={() =>
                setDadosUsuario({
                  ...dadosUsuario,
                  notificacoes: !dadosUsuario.notificacoes,
                })
              }
            />
          </View>
        </View>

        {/* SEGURANÇA */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Segurança</Text>

          <TextInput
            style={styles.input}
            placeholder="Senha atual"
            secureTextEntry
            value={senhas.atual}
            onChangeText={(t) =>
              setSenhas({ ...senhas, atual: t })
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Nova senha"
            secureTextEntry
            value={senhas.nova}
            onChangeText={(t) =>
              setSenhas({ ...senhas, nova: t })
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Confirmar nova senha"
            secureTextEntry
            value={senhas.confirmar}
            onChangeText={(t) =>
              setSenhas({ ...senhas, confirmar: t })
            }
          />

          <TouchableOpacity
            style={styles.btnOutline}
            onPress={alterarSenha}
          >
            <Text style={styles.btnOutlineTexto}>
              Alterar senha
            </Text>
          </TouchableOpacity>
        </View>

        {/* ZONA DE RISCO */}
        <View style={styles.cardDanger}>
          <Text style={styles.tituloDanger}>
            Zona de Risco
          </Text>

          <Text style={styles.textoDanger}>
            A exclusão da conta remove todos os seus dados.
          </Text>

          <TouchableOpacity style={styles.btnDanger}>
            <Text style={styles.btnDangerTexto}>
              Excluir minha conta
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
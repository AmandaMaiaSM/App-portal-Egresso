import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image
} from "react-native";


import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import logo from "../../assets/iema-page-topo.png";
import { styles } from "./Styles";

export default function Cadastro({ navigation }: any) {

  const [nome, setNome] = useState("");

  function handleCadastro() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
        

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

        <ScrollView contentContainerStyle={styles.container}>

          <Image source={logo} style={styles.logo} />

          <Text style={styles.title}>Criar Conta</Text>

          <View style={styles.card}>

            <TextInput
              placeholder="Nome completo"
              style={styles.input}
            />

            <TextInput
              placeholder="Email"
              style={styles.input}
            />

            <TextInput
              placeholder="Telefone"
              style={styles.input}
            />

            <TextInput
              placeholder="Senha"
              secureTextEntry
              style={styles.input}
            />

            <TextInput
              placeholder="Curso técnico"
              style={styles.input}
            />

            <TextInput
              placeholder="Instituição (IEMA)"
              style={styles.input}
            />

            <TextInput
              placeholder="Cidade"
              style={styles.input}
            />

            <TextInput
              placeholder="Endereço"
              style={styles.input}
            />

            <TextInput
              placeholder="Habilidades"
              style={styles.input}
            />

            <TextInput
              placeholder="Biografia profissional"
              style={[styles.input, { height: 90 }]}
              multiline
            />

            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
              <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.loginLink}>Já possui conta? Entrar</Text>
          </TouchableOpacity>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}
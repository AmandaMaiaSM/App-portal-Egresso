import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { styles } from "./Styles";

export default function EsqueciSenha({ navigation }: any) {

  const [email, setEmail] = useState("");

  function handleRecuperarSenha() {
    console.log("Email enviado:", email);

    // depois pode integrar com API
    navigation.goBack();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

        <View style={styles.container}>

          <Text style={styles.title}>Recuperar Senha</Text>

          <Text style={styles.subtitle}>
            Informe seu email para receber as instruções de recuperação de senha.
          </Text>

          <TextInput
            placeholder="Seu email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <TouchableOpacity style={styles.button} onPress={handleRecuperarSenha}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.loginLink}>Voltar para Login</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}
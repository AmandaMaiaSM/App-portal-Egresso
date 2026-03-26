import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";

import logo from "../../assets/LOGOMARCAITB.png";
import { styles } from "./Styles";

export default function Login({ navigation }: any) {

  function handleLogin() {
    navigation.replace("Drawer");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
        <View style={styles.container}>

          <Image source={logo} style={styles.logo} />

          <Text style={styles.title}>Portal IEMA Egresso</Text>

          <TextInput
            placeholder="Email"
            style={styles.input}
          />

          <TextInput
            placeholder="Senha"
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("EsqueciSenha")}>
            <Text style={styles.forgot}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.register} onPress={() => navigation.navigate("Cadastro")}>
              Não possui conta? <Text style={styles.registerBold}>Cadastre-se</Text>
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

    </KeyboardAvoidingView>
  );
}
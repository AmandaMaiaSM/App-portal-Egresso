import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawerRoutes from "./DrawerNavigator";
import Login from "@/app/login/Login";
import Cadastro from "@/app/cadastro/cadastro";
import EsqueciSenha from "@/app/esqueciSenha/esqueciSenha";
import Notificacoes from "@/app/notificacoes/Notificacoes";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      {/* Tela de Login */}
      <Stack.Screen name="Login" component={Login} />
      {/* Tela de Cadastro */}
      <Stack.Screen name="Cadastro" component={Cadastro} />
      {/* Tela de Esqueci Senha */}
      <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
      {/* Tela de Notificações */}
      <Stack.Screen name="Notificacoes" component={Notificacoes} />


      <Stack.Screen name="Drawer" component={DrawerRoutes} />
    </Stack.Navigator>
  );
}
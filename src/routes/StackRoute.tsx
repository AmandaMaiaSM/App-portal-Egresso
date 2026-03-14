import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../app/Dashboard/Dashboard";
import PerfilAluno from "../app/PerfilAluno/PerfilAluno";
import VagasgeraisBusca from "../app/VagasgeraisBuca/VagasgeraisBusca";

const Stack = createNativeStackNavigator(); 
export default function StackRoute() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Vagas" component={VagasgeraisBusca} />
            <Stack.Screen name="Perfil" component={PerfilAluno} />
        </Stack.Navigator>
    );
}
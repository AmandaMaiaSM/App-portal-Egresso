import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from "../app/Dashboard/Dashboard";
import PerfilAluno from "../app/PerfilAluno/PerfilAluno";
import VagasgeraisBusca from "../app/VagasgeraisBuca/VagasgeraisBusca";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator> 
            <Tab.Screen name="Home" component={Dashboard} />
            <Tab.Screen name="Vagas" component={VagasgeraisBusca} />
            <Tab.Screen name="Perfil" component={PerfilAluno} />
        </Tab.Navigator>
    );
}   
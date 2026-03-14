import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Dashboard from "../app/Dashboard/Dashboard";
import VagasgeraisBusca from "../app/VagasgeraisBuca/VagasgeraisBusca";
import Perfil from "../app/PerfilAluno/PerfilAluno";

import { Colors } from "../constants/Colors";
import PerfilAluno from "../app/PerfilAluno/PerfilAluno";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, size, color }) => {
          let iconName: any;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }

          if (route.name === "Vagas") {
            iconName = focused ? "search" : "search-outline";
          }

          if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",

       tabBarStyle: {
          backgroundColor: Colors.primaria,
          width: "100%",
          height: 90,
          paddingBottom: 15,
          marginTop: -5,
          paddingTop: 10,
        },

        tabBarIconStyle: {
          marginTop: -10,
        },
      })}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Vagas" component={VagasgeraisBusca} />
      <Tab.Screen name="Perfil" component={PerfilAluno} />
    </Tab.Navigator>
  );
}
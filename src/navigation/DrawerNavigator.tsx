import { createDrawerNavigator,  DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";

import Header from "../components/Header";
import TabRoutes from "./TabNavigation";
import VagasDisponivel from "../screens/VagasCompatíveis/VagasCompatíveis";
import Candidaturas from "../screens/Candidaturas/Candidaturas";
import Curriculo from "../screens/Curriculo/Curriculo";
import Configuracoes from "../screens/configuracaoAluno/Configuracoes";
import { Colors } from '@/constants/Colors';

import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const insets = useSafeAreaInsets();

  function handleLogout() {
    props.navigation.replace("Login");
  }

  return (
    <View style={{ flex: 1 }}>

      <DrawerContentScrollView {...props}>

        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
            <MaterialIcons name="menu" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.menuList}>
          <DrawerItemList {...props} />
        </View>

      </DrawerContentScrollView>

      {/* BOTÃO NO RODAPÉ */}
      <View style={[styles.footer, { paddingBottom: Math.max(20, insets.bottom + 12) }]}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color="white" />
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}



export default function DrawerNavigator() {
  
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        header: () => <Header />,
        drawerStyle: {
          backgroundColor: Colors.primaria,
          width: 250,
         
        },
        drawerActiveTintColor: Colors.clara,
        drawerInactiveTintColor: Colors.clara,

        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
      }}
    >
      
      <Drawer.Screen name="Início" component={TabRoutes} />
      <Drawer.Screen name="Vagas Compatíveis" component={VagasDisponivel} />
      <Drawer.Screen name="Minhas Candidaturas" component={Candidaturas} />
      <Drawer.Screen name="Currículo" component={Curriculo} />
      <Drawer.Screen name="Configurações" component={Configuracoes} />
    </Drawer.Navigator>

    
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.2)",
  },

  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  menuList: {
    marginTop: 12,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.2)",
  },


  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    
  },

  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },


});
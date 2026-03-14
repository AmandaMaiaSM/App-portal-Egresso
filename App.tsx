import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";

import StackNavigator from "@/navigation/StackNavigator";

export default function App() {

  // Configura a barra de navegação para ter
  //  um fundo claro e botões escuros  
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#E8EDF5");
    NavigationBar.setButtonStyleAsync("dark");
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
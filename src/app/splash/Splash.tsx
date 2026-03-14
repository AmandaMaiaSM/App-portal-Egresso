import { View, Image, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import logo from "@/assets/iema-page-topo.png";
import { Colors } from "@/constants/Colors";
import type { RootStackParamList } from "@/types/navigation";

export default function Splash() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Portal IEMA Egresso</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.primaria,
    justifyContent: "center",
    alignItems: "center"
  },

  logo: {
    width: 200,
    height: 120,
    resizeMode: "contain"
  },

  title: {
    color: "white",
    fontSize: 18,
    marginTop: 20
  }

});
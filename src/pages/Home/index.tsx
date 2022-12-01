import React from "react";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StackPromisList } from "../../routes/app.routes";
import { AuthContext } from "../../Context/AuthContext";

export default function Home() {
  const navigate = useNavigation<StackNavigationProp<StackPromisList>>();
  const { signOut } = useContext(AuthContext);
  function sair() {
    signOut();
  }
  function abrirProduto() {
    navigate.navigate("Produto");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cantainerButtons}>
        <TouchableOpacity style={styles.button} onPress={abrirProduto}>
          <Text style={styles.text}>Produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Clientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>vazio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={sair}>
          <Text style={styles.text}>desconectar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  cantainerButtons: {
    flex: 1,
    alignItems: "center",

    paddingVertical: "8%",
    width: "100%",
    backgroundColor: "#006494",
  },
  button: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1b98e0",
    marginBottom: 5,
    height: "15%",
    borderRadius: 10,
  },
  text: {
    color: "#e8f1f2",
    fontSize: 18,
    fontWeight: "bold",
  },
});

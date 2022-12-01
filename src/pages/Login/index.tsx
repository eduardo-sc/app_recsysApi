import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthContext } from "../../Context/AuthContext";
export default function Login() {
  const { signIn } = useContext(AuthContext);
  const [codigo, setCodigo] = useState("19");
  const [senha, setSenha] = useState("123");
  async function loginUsuario() {
    if (codigo === "" || senha === "") {
      alert("Compos vazios ");
      return;
    }
    await signIn({ codigo, senha });
  }

  return (
    <View style={styles.containner}>
      <View style={styles.containnerInputs}>
        <TextInput
          placeholderTextColor={"#e8f1f2"}
          style={styles.inputs}
          placeholder="Codigo Vendedor"
          onChangeText={setCodigo}
          value={codigo}
        />
        <TextInput
          placeholderTextColor={"#e8f1f2"}
          style={styles.inputs}
          placeholder="Senha"
          onChangeText={setSenha}
          value={senha}
        />
        <TouchableOpacity style={styles.Button} onPress={loginUsuario}>
          <Text style={styles.text}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006494",
  },
  containnerInputs: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    width: "95%",
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: "#247ba0",
    marginBottom: 5,
    borderRadius: 8,
    color: "#e8f1f2",
  },
  Button: {
    width: "90%",
    backgroundColor: "#1b98e0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: 40,
    marginTop: 5,
  },
  text: {
    color: "#e8f1f2",
    fontSize: 18,
    fontWeight: "bold",
  },
});

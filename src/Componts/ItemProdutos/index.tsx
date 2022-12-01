import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { ProdutosProps } from "../../pages/Produto";
type itemProps = {
  data: ProdutosProps;
};
export default function ItemProdutos({ data }: itemProps) {
  function converterValor(valor: string) {
    return;
  }
  return (
    <View style={styles.contaner}>
      <View style={styles.list}>
        <Text style={styles.textCodigo}>Codigo: {data.codigo}</Text>
        <Text style={styles.text}>Nome: {data.nome}</Text>
        <Text style={styles.text}>Unidade: {data.unidade}</Text>

        <Text style={styles.ncm}>Ncm: {data.ncm}</Text>
        <Text style={styles.valor}>Valor: {data.preco}</Text>
        <Text style={styles.textEstoque}>Estoque: {data.qtd}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contaner: {
    margin: 2,
  },
  list: {
    backgroundColor: "#25709b",
    padding: 5,
  },
  textCodigo: {
    color: "#e8f1f2",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    color: "#e8f1f2",
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 5,
  },
  textEstoque: {
    color: "#f0260f",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 2,
  },
  ncm: {
    color: "#e8f1f2",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 15,
  },
  valor: {
    color: "#e8f1f2",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10,
  },
});

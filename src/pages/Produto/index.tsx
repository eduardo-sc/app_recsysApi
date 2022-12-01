import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ItemProdutos from "../../Componts/ItemProdutos";
import { api } from "../../services/api";
export type ProdutosProps = {
  codigo: string;
  nome: string;
  unidade: string;
  preco: string;
  ncm: string;
  qtd: number;
};
export default function Produto() {
  const [produtos, setprodutos] = useState<ProdutosProps[]>();
  useEffect(() => {
    async function getProdutos() {
      await api
        .get<ProdutosProps[]>("/produtos")
        .then((response) => {
          setprodutos([]);
          setprodutos(response.data);
        })
        .catch((erro) => {
          console.log(erro.response.data);
        });
    }
    getProdutos();
  }, []);
  return (
    <View>
      <View>
        <TextInput placeholder="Buscar Produto" />
      </View>
      <FlatList
        data={produtos}
        initialNumToRender={7}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => <ItemProdutos data={item} />}
      />
    </View>
  );
}

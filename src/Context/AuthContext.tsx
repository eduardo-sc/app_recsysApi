import React, { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
("@react-native-async-storage/async-storage");
type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (creantials: SigInProps) => Promise<void>;

  // loadAuth: boolean;
  // loading: boolean;
  signOut: () => Promise<void>;
};
type UserProps = {
  codigo: string;
  nome: string;
};

type SigInProps = {
  codigo: string;
  senha: string;
};
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({
    codigo: "",
    nome: "",
  });
  const isAuthenticated = !!user.nome;
  async function signIn({ codigo, senha }: SigInProps) {
    let data = {
      codigo: codigo,
      senha: senha,
    };

    await api
      .post("/login", data)
      .then(async (response) => {
        let data = {
          codigo: response.data.codigo,
          nome: response.data.nome,
        };
        await AsyncStorage.setItem("@recsys", JSON.stringify(data));
        console.log(response.data.codigo);
        setUser({
          codigo: response.data.codigo,
          nome: response.data.nome,
        });
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  useEffect(() => {
    async function getUser() {
      //      //pegando informcao do usuario
      const InforUser = await AsyncStorage.getItem("@recsys");
      let hasUser: UserProps = JSON.parse(InforUser || "{}");
      console.log(Object.keys(hasUser).length > 0);
      if (Object.keys(hasUser).length > 0) {
        setUser({ codigo: hasUser.codigo, nome: hasUser.nome });
      }
    }
    getUser();
  }, []);
  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser({
        codigo: "",
        nome: "",
      });
    });
  }
  return (
    <AuthContext.Provider value={{ user, signIn, isAuthenticated, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

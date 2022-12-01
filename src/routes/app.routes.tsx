import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Produto from "../pages/Produto";
export type StackPromisList = {
  Home: undefined;
  Cliente: undefined;
  Produto: undefined;
};
const Stack = createStackNavigator<StackPromisList>();

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Home"}
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={"Produto"} component={Produto} />
    </Stack.Navigator>
  );
}

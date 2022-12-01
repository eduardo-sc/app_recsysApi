import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/pages/Login";
import { AuthProvider } from "./src/Context/AuthContext";
// import "react-native-gesture-handler";
import { BaseNavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
export default function App() {
  return (
    <BaseNavigationContainer>
      <AuthProvider>
        <StatusBar style={"auto"} />
        <Routes />
      </AuthProvider>
    </BaseNavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

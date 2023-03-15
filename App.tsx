import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import RootNavigation from "./src/navigation/RootNavigation";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <RootNavigation />
    </NavigationContainer>
  );
}

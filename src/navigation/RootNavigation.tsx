import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { HomeScreen, SkeletonScreen } from "../screens";

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Home: {} | undefined;
  Skeleton: {} | undefined;
};

export type PropsType = NativeStackScreenProps<
  RootStackParamList,
  "Home" | "Skeleton"
>;

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Skeleton" component={SkeletonScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

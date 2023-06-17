import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  FlatListCarousel,
  HomeScreen,
  SkeletonScreen,
  StickyFooter,
  TabsIndicator,
} from "../screens";

import { enableScreens } from "react-native-screens";

type RootStackParamList = {
  Home: {} | undefined;
  Skeleton: {} | undefined;
  StickyFooter: {} | undefined;
  FlatListCarousel: {} | undefined;
  TabsIndicator: {} | undefined;
};

enableScreens();
export type PropsType = NativeStackScreenProps<
  RootStackParamList,
  "Home" | "Skeleton" | "StickyFooter" | "FlatListCarousel" | "TabsIndicator"
>;

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Skeleton" component={SkeletonScreen} />
      <Stack.Screen name="StickyFooter" component={StickyFooter} />
      <Stack.Screen name="FlatListCarousel" component={FlatListCarousel} />
      <Stack.Screen name="TabsIndicator" component={TabsIndicator} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

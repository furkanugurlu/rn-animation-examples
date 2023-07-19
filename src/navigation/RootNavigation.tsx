import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  Advanced3DCarousel,
  FlatListCarousel,
  HomeScreen,
  MovieCarousel,
  SkeletonScreen,
  StickyFooter,
  TabsIndicator,
  PincodeAnimation,
} from "../screens";

import { enableScreens } from "react-native-screens";

type RootStackParamList = {
  Home: {} | undefined;
  Skeleton: {} | undefined;
  StickyFooter: {} | undefined;
  FlatListCarousel: {} | undefined;
  TabsIndicator: {} | undefined;
  MovieCarousel: {} | undefined;
  Advanced3DCarousel: {} | undefined;
  PincodeAnimation: {} | undefined;
};

enableScreens();
export type PropsType = NativeStackScreenProps<
  RootStackParamList,
  | "Home"
  | "Skeleton"
  | "StickyFooter"
  | "FlatListCarousel"
  | "TabsIndicator"
  | "MovieCarousel"
  | "Advanced3DCarousel"
  | "PincodeAnimation"
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
      <Stack.Screen name="MovieCarousel" component={MovieCarousel} />
      <Stack.Screen name="Advanced3DCarousel" component={Advanced3DCarousel} />
      <Stack.Screen name="PincodeAnimation" component={PincodeAnimation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

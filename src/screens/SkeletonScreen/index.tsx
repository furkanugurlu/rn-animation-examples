import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import { PropsType } from "../../navigation/RootNavigation";
import { LinearGradient } from "expo-linear-gradient";

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);
const { width } = Dimensions.get("window");
const SkeletonScreen = ({ navigation }: PropsType) => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });
  return (
    <View style={styles.container}>
      <View style={styles.skletetonWrapper}>
        <AnimatedLG
          colors={["#a0a0a0", "#b0b0b0", "#b0b0b0", "#a0a0a0"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            ...(StyleSheet.absoluteFill as any),
            transform: [{ translateX }],
          }}
        />
      </View>
    </View>
  );
};

export default SkeletonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  skletetonWrapper: {
    backgroundColor: "#a0a0a0",
    borderColor: "#a0a0a0",
    height: 150,
    width,
  },
});

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { PropsType } from "../../navigation/RootNavigation";

const index = ({ navigation }: PropsType) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("Home")}>Go to home</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 45 },
});

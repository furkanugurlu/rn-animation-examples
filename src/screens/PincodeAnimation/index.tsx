import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MotiView } from "moti";
const { width } = Dimensions.get("window");

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"];

const pinLenght = 4;
const pinContainerSize = width / 2;

const pinMaxSize = pinContainerSize / pinLenght;
const pinSpacing = 10;
const pinSize = pinMaxSize - pinSpacing * 2;

const dialPadSize = width * 0.2;
const dialPadTextSize = dialPadSize * 0.4;
const _spacing = 20;

function DialPad({
  onPress,
}: {
  onPress: (item: (typeof dialPad)[number]) => void;
}) {
  return (
    <FlatList
      numColumns={3}
      data={dialPad}
      style={{ flexGrow: 0 }}
      scrollEnabled={false}
      columnWrapperStyle={{ gap: _spacing }}
      contentContainerStyle={{ gap: _spacing }}
      keyExtractor={(_, i) => index.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            disabled={item === ""}
            onPress={() => {
              onPress(item);
            }}
          >
            <View
              style={{
                width: dialPadSize,
                height: dialPadSize,
                borderRadius: dialPadSize,
                borderWidth: typeof item !== "number" ? 0 : 1,
                borderColor: "black",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item === "del" ? (
                <Ionicons
                  name="backspace-outline"
                  color={"black"}
                  style={{ fontSize: dialPadTextSize }}
                />
              ) : (
                <Text style={{ fontSize: dialPadTextSize }}>{item}</Text>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
const index = () => {
  const [code, setCode] = useState<number[]>([]);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: pinSpacing * 2,
          marginBottom: _spacing * 2,
          height: pinSize * 2,
          alignItems: "flex-end",
        }}
      >
        {[...Array(pinLenght).keys()].map((i) => {
          const isSelected = !!code[i];
          return (
            <MotiView
              key={`pin-${i}`}
              style={{
                width: pinSize,
                height: isSelected ? pinSize : 2,
                backgroundColor: "red",
                borderRadius: pinSize,
              }}
              transition={{
                type: "timing",
                duration: 200,
              }}
              animate={{
                height: isSelected ? pinSize : 2,
              }}
            />
          );
        })}
      </View>
      <DialPad
        onPress={(item) => {
          if (item === "del") {
            setCode((prevCode) => prevCode.slice(0, prevCode.length - 1));
          } else if (typeof item === "number") {
            if (code.length === pinLenght) return;
            setCode((prevCode) => [...prevCode, item]);
          }
        }}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

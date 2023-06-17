import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";
import { PropsType } from "../../navigation/RootNavigation";
import data from "../../../data";
import { DataType } from "../../types";
import { Entypo } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const HomeScreen = ({ navigation }: PropsType) => {
  const RenderItem: FC<{ item: DataType }> = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.destinationName)}
        activeOpacity={0.8}
        style={styles.ıtemWrapper}
      >
        <View style={styles.textWrapper}>
          <Image source={{ uri: item.image }} style={styles.ıtemWrapperImage} />
          <Text style={styles.ıtemWrapperText}>{item.title}</Text>
        </View>
        <Entypo name="chevron-thin-right" size={17} color="#37474F" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTextStyle}>Animation Example</Text>
      <FlatList
        data={data as DataType[]}
        style={styles.faltListStyle}
        renderItem={({ item }: { item: DataType }) => (
          <RenderItem item={item} />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 45,
  },
  faltListStyle: {
    paddingTop: 20,
  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#607D8B",
    margin: width * 0.03,
  },
  ıtemWrapper: {
    marginBottom: 20,
    flexDirection: "row",
    height: height * 0.07,
    paddingHorizontal: width * 0.04,
    alignItems: "center",
    borderBottomColor: "lightgray",
    justifyContent: "space-between",
    borderBottomWidth: 0.4,
  },
  textWrapper: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
  ıtemWrapperImage: {
    width: width * 0.1,
    height: "100%",
  },
  ıtemWrapperText: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#37474F",
  },
});

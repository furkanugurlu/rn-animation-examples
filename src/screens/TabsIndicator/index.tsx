import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Animated,
  Dimensions,
  FlatList,
  Image,
  findNodeHandle,
  TouchableOpacity,
} from "react-native";
import React from "react";

const { height, width } = Dimensions.get("screen");
const images = {
  man: "https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  women:
    "https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  kids: "https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  skullcandy:
    "https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  help: "https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
};

const data = Object.keys(images).map((i) => ({
  key: i,
  title: i,
  // @ts-ignore
  image: images[i],
  ref: React.createRef(),
}));

const Tab = React.forwardRef(({ item, onItemPress }: any, ref) => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <View ref={ref as any}>
        <Text
          style={{
            color: "white",
            fontSize: 84 / data.length,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

const Indicator = ({ measures, scrollX }: any) => {
  const inputRange = data.map((_, i) => i * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure: any) => measure.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure: any) => measure.x),
  });
  return (
    <Animated.View
      style={{
        position: "absolute",
        height: 4,
        width: indicatorWidth,
        left: 0,
        backgroundColor: "white",
        bottom: -10,
        transform: [{ translateX }],
      }}
    />
  );
};

const Tabs = ({ data, scrollX, onItemPress }: any) => {
  const containerRef = React.useRef();
  const [measures, setMeasures] = React.useState([]);
  React.useEffect(() => {
    const m: any = [];
    data.forEach((item: any) => {
      // @ts-ignore
      item.ref.current.measureLayout(
        containerRef.current,
        (x: any, y: any, width: any, height: any) => {
          m.push({
            x,
            y,
            width,
            height,
          });

          if (m.length === data.length) {
            setMeasures(m);
          }
        }
      );
    });
  }, []);

  return (
    <View style={{ position: "absolute", top: 100, width }}>
      <View
        ref={containerRef as any}
        style={{
          justifyContent: "space-evenly",
          flex: 1,
          flexDirection: "row",
        }}
      >
        {data.map((item: any, index: number) => {
          return (
            <Tab
              key={item.key}
              item={item}
              ref={item.ref}
              onItemPress={() => onItemPress(index)}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};

const TabsIndicator = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ref = React.useRef();
  const onItemPress = React.useCallback((itemIndex: any) => {
    // @ts-ignore
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <FlatList
        ref={ref as any}
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item?.image }}
                style={{ flex: 1, resizeMode: "cover" }}
              />
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  { backgroundColor: "rgba(0,0,0,0.3)" },
                ]}
              />
            </View>
          );
        }}
      />
      <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
    </View>
  );
};

export default TabsIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { Image, StyleSheet, Text, View } from "react-native";

export default function Content() {
  return (
    <View style={{ width: "90%", alignItems: "center" }}>
      <View style={styles.container}>
        <Text style={{ color: "#242424", fontWeight: "600" }}>
          Popular Items
        </Text>
        <Text style={{ color: "#606060", fontWeight: "600" }}>View All</Text>
      </View>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../../../assets/burger1.png")}
            style={styles.image}
          />
          <Text style={styles.text}>BURGER</Text>
        </View>
        <View>
          <Image
            source={require("../../../assets/pizza.png")}
            style={styles.image}
          />
          <Text style={styles.text}>PIZZA</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  image: {
    width: 187,
    height: 150,
    borderRadius: 12,
    marginVertical: 7,
  },
  text: {
    fontWeight: "600",
    paddingLeft: 10,
    color: "#242424",
  },
});

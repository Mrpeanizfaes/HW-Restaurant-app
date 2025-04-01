import {
  Entypo,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Category() {
  const size = 35;
  return (
    <View style={styles.container}>
      <View style={[styles.iconWrapper, { backgroundColor: "#29D697" }]}>
        <Ionicons name="pizza-outline" size={size} color="#fff" />
        <Text style={{ color: "#fff" }}>PIZZA</Text>
      </View>
      <View style={styles.iconWrapper}>
        <FontAwesome6 name="burger" size={size} />
        <Text>BURGER</Text>
      </View>
      <View style={styles.iconWrapper}>
        <Entypo name="drink" size={size} />
        <Text>DRINK</Text>
      </View>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons name="rice" size={size} />
        <Text>RICE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginRight: -20,
    marginTop: 35,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 96,
    height: 106,
    gap: 7,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
  },
});

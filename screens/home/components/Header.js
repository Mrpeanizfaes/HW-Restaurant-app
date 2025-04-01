import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.header} colors={["#E6E6E600", "#FEFFBF"]}>
        <Image
          source={require("../../../assets/donut.png")}
          style={styles.avatar}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#818181" }}>Your Location</Text>
          <View style={styles.location}>
            <Ionicons name="location-outline" size={18} color="#4A43EC" />
            <Text style={{ fontWeight: "600" }}>Vietnam, Hanoi</Text>
          </View>
        </View>
        <Ionicons name="notifications-outline" size={30} style={styles.icon} />
      </LinearGradient>
      <View style={styles.searchBar}>
        <Ionicons
          name="search-outline"
          size={25}
          color="rgba(255,255,255,0.7)"
        />
        <Text style={{ color: "rgba(255,255,255,0.7)" }}>Search your food</Text>
        <MaterialCommunityIcons
          name="sort"
          size={25}
          color="#fff"
          style={{ marginLeft: 160 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    width: "100%",
    height: 170,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: "50%",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 5,
  },
  icon: {
    borderWidth: 1,
    borderRadius: "50%",
    borderColor: "rgba(43, 43, 43, 0.1)",
    padding: 5,
    color: "#2B2B2B",
  },
  searchBar: {
    width: "90%",
    marginTop: -30,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#4A43EC",
    borderRadius: 50,
    padding: 20,
  },
});

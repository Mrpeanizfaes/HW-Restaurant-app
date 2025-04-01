import { Fontisto, Octicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Hero() {
  const dotSize = 17;
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.heroText}>
          <Text style={styles.mainText}>BURGER</Text>
          <Text style={styles.secondaryText}>Today's Hot offer</Text>
        </View>
        <View style={styles.sale}>
          <Text style={styles.saleText}>10%</Text>
          <Text style={styles.saleText}>OFF</Text>
        </View>
        <View style={styles.rating}>
          <Image
            source={require("../../../assets/edward.png")}
            style={styles.ava}
          />
          <Image
            source={require("../../../assets/bella.png")}
            style={[styles.ava, styles.shiftedAva]}
          />
          <Image
            source={require("../../../assets/jacob.png")}
            style={[styles.ava, styles.shiftedAva, { zIndex: 2 }]}
          />
          <Fontisto name="star" size={19} color="#FFD804" />
          <Text style={{ color: "#fff", fontSize: 12 }}>4.9 (3k+ Rating)</Text>
        </View>
        <View style={styles.vector1}></View>
        <View style={styles.vector2}></View>
        <View style={styles.vector3}></View>
        <View style={styles.vector4}></View>
        <Image
          source={require("../../../assets/hero-burger.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.dotWrapper}>
        <Octicons name="dot-fill" size={dotSize} color="rgba(0,0,0,0.25)" />
        <Octicons name="dot-fill" size={dotSize} color="rgba(0,0,0,0.25)" />
        <Octicons name="dot-fill" size={dotSize} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    margin: 10,
    marginTop: 0,
  },
  hero: {
    position: "relative",
    width: "90%",
    height: 200,
    borderRadius: 20,
    backgroundColor: "#191C1F",
    overflow: "hidden",
  },
  vector1: {
    position: "absolute",
    top: -60,
    left: -40,
    width: "200%",
    height: 30,
    transform: [{ rotate: "-25deg" }],
    backgroundColor: "rgba(165, 165, 165, 0.07)",
    zIndex: 1,
  },
  vector2: {
    position: "absolute",
    top: -140,
    left: -40,
    width: "200%",
    height: 30,
    transform: [{ rotate: "-25deg" }],
    backgroundColor: "rgba(165, 165, 165, 0.07)",
    zIndex: 1,
  },
  vector3: {
    position: "absolute",
    top: 20,
    left: -40,
    width: "200%",
    height: 30,
    transform: [{ rotate: "-25deg" }],
    backgroundColor: "rgba(165, 165, 165, 0.07)",
    zIndex: 1,
  },
  vector4: {
    position: "absolute",
    top: 100,
    left: -40,
    width: "200%",
    height: 30,
    transform: [{ rotate: "-25deg" }],
    backgroundColor: "rgba(165, 165, 165, 0.07)",
    zIndex: 1,
  },
  sale: {
    position: "absolute",
    top: 40,
    right: 120,
    width: 55,
    height: 55,
    borderRadius: "50%",
    backgroundColor: "#4A43EC",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },
  saleText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
  rating: {
    position: "absolute",
    top: 120,
    left: 25,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  ava: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "#fff",
    zIndex: 4,
  },
  shiftedAva: {
    marginLeft: -15,
    zIndex: 3,
  },
  heroText: {
    position: "absolute",
    alignItems: "flex-start",
    top: 50,
    left: 20,
    zIndex: 2,
  },
  mainText: {
    color: "#FFD804",
    fontSize: 30,
    fontWeight: "700",
  },
  secondaryText: {
    fontSize: 17,
    color: "#fff",
  },
  image: {
    position: "absolute",
    width: 240,
    height: 240,
    left: 190,
    top: 15,
    zIndex: 2,
  },
  dotWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});

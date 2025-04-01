import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "./components/Header";
import Category from "./components/Category";
import Hero from "./components/Hero";
import Content from "./components/Content";

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Header />
      <Category />
      <Hero />
      <Content />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

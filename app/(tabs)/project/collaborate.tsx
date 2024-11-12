import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CollaborateForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Collaborate</Text>
      <Text style={styles.description}>This is the Collaborate page.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
});

export default CollaborateForm;

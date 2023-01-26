import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Header = ({ title, newStyles }) => {
  return (
    <View style={styles.header}>
      <Text style={{ ...styles.headerTitle, ...newStyles }}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    height: 90,
    paddingTop: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 15,
  },
  headerTitle: {
    color: "#2196f3",
    fontSize: 40,
  },
})

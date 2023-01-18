import { StyleSheet, TextInput, View, Button } from "react-native"
import React from "react"

const AddItem = ({ onChange, textValue, onAddItem }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Write here your task"
        style={styles.addItemInput}
        onChangeText={onChange}
        value={textValue}
      />
      
      <Button title="Add New Task" onPress={onAddItem} />
    </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addItemInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    margin: 5,
    width: "80%",
    height: 45,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
})

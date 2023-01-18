import React, { useState } from "react"
import { StyleSheet, Text, View, Button, FlatList} from "react-native"
import Modal from "./src/components/Modal"
import AddItem from "./src/components/AddItem"

export default function App() {
  const [textItem, setTextItem] = useState("")
  const [list, setList] = useState("")
  const [itemSelected, setItemSelected] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [count, setCount] = useState(0)



  const onHandleChangeItem = text => {
    setTextItem(text)
  }

  const addItem = () => {
    setList(prevState => [...prevState, textItem])
    setTextItem("")
  }

  const handleModal = item => {
    setItemSelected(item)
    setModalVisible(true)
    
  }


  const onHandleDelete = item => {
    console.log(item)
    setList(prevState => prevState.filter(element => element !== item))
    setModalVisible(!modalVisible)
  }

  const completedFunction = (item) => {
    setCount(count + 1)
    handleModal(item)


  }


  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyleContainer}>
      <View style={styles.renderItemStyle}>
        <Text>{item}</Text>
      </View>
      
      <Button title="Completed" onPress={() => completedFunction(item)} />
      <View style={styles.space}></View>
      <Button title="Delete" onPress={() => handleModal(item)} />
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>To do List</Text>
        <AddItem
          onChange={onHandleChangeItem}
          textValue={textItem}
          onAddItem={addItem}
        />
      </View>

      <Text style={styles.pendingTitle}>Pending tasks</Text>
     
     
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item}
        />
      </View>
      
      
      
      <Text style={styles.completedTitle}>Completed tasks' History</Text>
     
      <Text style={styles.completedTitle}>{count}</Text>
      
      <Button title="Reset Count" onPress={() => setCount(count*0)} />
      <View style={styles.listContainer}>

        <FlatList
        
        />
      </View>
      

      
      
      <Modal
        isVisible={modalVisible}
        itemSelected={itemSelected}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        onDismissModal={setModalVisible}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#E7EAF2",A
  },
  titleContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  title: {
    marginBottom: 20,
    fontSize: 40,
    fontWeight: "700",
    color: "#2196f3",
  },
  pendingTitle: {
    marginTop: 90,
    fontSize: 20,
    fontWeight: "700",
    color: "#2196f3",
    paddingHorizontal: 30,
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 20,
    padding: 3,
  },
  renderItemStyleContainer:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffcfc",
    padding: 10,
    height: 60,
  },
  renderItemStyle: {
    height: 50,
    width: 100,
    flexDirection: "row",
    marginRight: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  space: {
    marginLeft: 10,
  },
  completedTitle: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "700",
    color: "#3eaa91",
    paddingHorizontal: 30,
  },
})

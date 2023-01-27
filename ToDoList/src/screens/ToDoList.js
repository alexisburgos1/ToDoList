
import React, { useState } from "react"
import { StyleSheet, Text, View, Button, FlatList, Keyboard} from "react-native"

import { useFonts } from "expo-font"

import Header from "./../components/Header"
import Modal from "./../components/Modal"
import AddItem from "./../components/AddItem"


const ToDoList = ({onHandleComplete}) => {

    const [loaded] = useFonts({
        AcmeScriptRegular: require("./../assets/fonts/Acme-Regular.ttf"),
        })

    const [textItem, setTextItem] = useState("")
    const [list, setList] = useState("")
    const [itemSelected, setItemSelected] = useState("")
    const [modalVisible, setModalVisible] = useState(false)
    const [confirmed, setConfirmed] = useState(false)


    const handleConfirmation = () => {
        console.log("confirmed press")
        console.log(`setConfirmed ${confirmed} before`)
        setConfirmed(true)
        console.log(`setConfirmed ${confirmed} after`)
    }
    
    const onHandleChangeItem = text => {
        setTextItem(text)
        console.log(text)
    }
    const addItem = () => {
        setList(prevState => [...prevState, textItem])
        setTextItem("")
        Keyboard.dismiss()
        console.log(`entro a funcion AddItem ${textItem}`)

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

    if (!loaded) {
        return null
      }
    return (
        <View>

            <View style={styles.titleContainer}>
                <Header
                    title={"To do List"}
                    newStyles={{ fontFamily: "AcmeScriptRegular" }}
                />
            </View>
            <AddItem
            onChange={onHandleChangeItem}
            textValue={textItem}
            onAddItem={addItem}
            />

            <Text style={styles.pendingTitle}>Pending tasks</Text>
        
        
            <View style={styles.listContainer}>
            
            
            <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item}
            />
            </View>

            <Text style={styles.completedTitle}>Completed tasks' List</Text>
            
            <Button title="Go to List" onPress={() => onHandleComplete(confirmed)} />
            

            <Modal
            isVisible={modalVisible}
            itemSelected={itemSelected}
            actionDeleteItem={() => onHandleDelete(itemSelected)}
            onDismissModal={setModalVisible}
            />
    </View>

    )
}

export default ToDoList
    
const styles = StyleSheet.create({
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
        marginTop: 50,
        fontSize: 20,
        fontWeight: "700",
        color: "#2196f3",
        paddingHorizontal: 30,
      },
      listContainer: {
        
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
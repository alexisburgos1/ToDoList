import React, { useState } from "react"
import { StyleSheet, Text, View, Button, FlatList, Keyboard} from "react-native"
import { useFonts } from "expo-font"
import Header from "./../components/Header"

const CompletedTasks = ({onHandleToDo}) => {
    const [loaded] = useFonts({
        AcmeScriptRegular: require("./../assets/fonts/Acme-Regular.ttf"),
        })

        const [confirm, setConfirm] = useState(true)

        const handleConfirmation = () => {
            console.log("confirmed press")
            console.log(`setConfirmed ${confirm} before`)
            setConfirm(true)
            console.log(`setConfirmed ${confirm} after`)
        }


if (!loaded) {
    return null
  }
return (
    <View>

        <View style={styles.titleContainer}>
            <Header
                title={"Completed"}
                newStyles={{ fontFamily: "AcmeScriptRegular" }}
            />
        </View>

        <Text style={styles.completedTitle}>Completed tasks' List</Text>
            
            <Button title="Go to the to do List" onPress={() => onHandleToDo(confirm)} />
    </View>
)}


export default CompletedTasks
    
const styles = StyleSheet.create({
    titleContainer: {
        height: 200,
        paddingHorizontal: 30,
        paddingTop: 80,
      },
      completedTitle: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: "700",
        color: "#3eaa91",
        paddingHorizontal: 30,
      },
      title: {
        marginBottom: 20,
        fontSize: 40,
        fontWeight: "700",
        color: "#3eaa91",
      },
})
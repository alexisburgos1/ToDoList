import React, { useState } from "react"
import { StyleSheet, Text, View, Button} from "react-native"

import ToDoList from "./src/screens/ToDoList"
import CompletedTasks from "./src/screens/CompletedTasks"

export default function App() {

  const [buttonCompleted, setButtonCompleted] = useState(false)

  const handleStartComplete = confirmed => {
    setButtonCompleted(true)
  }

  const handleToDoList = confirmed => {
    setButtonCompleted(false)
  }
  
  let content = <ToDoList onHandleComplete ={handleStartComplete}/>
 
  if (buttonCompleted){
    content = <CompletedTasks onHandleToDo = {handleToDoList}/>
  }

  return (
    <View style={styles.container}>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7EAF2",
  },
})
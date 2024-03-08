import { useState } from "react";
import React from "react";
import {
  SafeAreaView, StyleSheet, Pressable, View, Text, ScrollView, TextInput, Button,
} from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {

  const [tasks, setTasks] = useState([
    "Do laundry",
    "Go for a walk",
    "Walk the dog",
  ]);

  return (
    <SafeAreaView>
      <ToDoList  tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
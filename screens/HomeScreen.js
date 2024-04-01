import React from 'react';
import { useState } from "react";
import { Button, SafeAreaView, Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from "../ToDoList";
import ToDoForm from "../ToDoForm";

function HomeScreen({ navigation }) {

  const [tasks, setTasks] = useState([
      "Do laundry",
      "Go for a walk",
      "Walk the dog",
    ]);
  
    const addTask = (task) => {
      setTasks([...tasks, task]);
    };

  return (
      <MainLayout>
          <SafeAreaView>
          <ToDoList tasks={tasks}/>
          <ToDoForm addTask={addTask} />
          </SafeAreaView>
          <Button
              title="Go to About"
              onPress={() => navigation.navigate('About')}
          />
      </MainLayout>
  );
}

export default HomeScreen;
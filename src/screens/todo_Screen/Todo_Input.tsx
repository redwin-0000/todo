/* eslint-disable */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  StatusBar,
  
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Todo_List from '../todo_Screen/todo_List';

const Todo = () => {

  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  // input handle change for data
  const handleTitleChange = (text: string) => {
    setTitle(text);
  };
  const handleTodoChange = (text: string) => {
    setTodo(text);
  };

  
  // function for send the data to AsyncStorage
  const sendData = async () => {
    try {
      const userData = {
        id: String(Date.now()),
        title,
        todo,
      };
      const newTodos = Array.isArray(todos) ? [...todos, userData] : [userData];
      const jsonData = JSON.stringify(newTodos);
      await AsyncStorage.setItem('todos', jsonData);
      console.log('Data stored successfully!');
      setTitle('');
      setTodo('');
      
      // setTodos(newTodos);
    } catch (error) {
      console.log('Error storing data', error);
    }
  
  };

  // fetch data from local storage
  
  const fetchData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('todos');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setTodos(parsedData);
      }
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // clear data
  const _clearAll = async () => {
    try {
      await AsyncStorage.clear();
      console.log('Storage is clear');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.area}>
      <StatusBar barStyle="light-content" backgroundColor={'#000000'} />

      <View style={styles.todo_body}>
        <View>
          <Text style={styles.todo_text}>ADD TODO</Text>
        </View>
        <View style={styles.inputText}>
          <TextInput
            style={styles.inputArea}
            placeholder="Task Title"
            value={title}
            onChangeText={handleTitleChange}
          />
          <TextInput
            style={styles.inputArea}
            placeholder="Enter Task"
            value={todo}
            onChangeText={handleTodoChange}
          />
        </View>
        <View style={styles.btn}>
          <Button title="SUBMIT" onPress={sendData} />
          <View style={{marginLeft: 10}}>
            <Button title="CLEAR" onPress={_clearAll} />
          </View>
        </View>
        <Todo_List />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: '#000000',
   
  },
  todo_body: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
  todo_text: {
    color: '#fff',
    fontSize: 20,
  },
  inputText: {
    marginTop: 10,
  },
  inputArea: {
    backgroundColor: '#fff',
    width: 350,
    paddingLeft: 15,
    fontSize: 20,
    borderRadius: 10,
    marginTop: 15,
  },
  btn: {
    width: 100,
    borderRadius: 15,
    marginTop: 10,
    flexDirection: 'row',
    marginRight: 30,
  },
  output: {
    color: '#fff',
  },
});

export default Todo;

/* eslint-disable */

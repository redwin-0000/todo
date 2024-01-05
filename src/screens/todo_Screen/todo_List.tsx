/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoWork = () => {
  const [todo, setTodos] = useState<any | null>(null);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState<string>('');
  const [editTodo, setEditTodo] = useState<string>('');

  // fetch the data
  const fetchData = async () => {
    try {
  
      const storedData = await AsyncStorage.getItem('todos');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setTodos(parsedData);
        // setTodos(todo);
        console.log(todo)
      }
    } catch (error) {
      console.warn('Error fetching data', error);
    };
 
  useEffect(() => {
    fetchData();
  },[]);
  }
  // delete function
  const deleteItem = async (id: string) => {
    const newData = todo.filter((item: any) => item.id !== id);
    setTodos(newData);
    await AsyncStorage.setItem('todos', JSON.stringify(newData));
  };

  // edit function
  const startEditing = (id: string, title: string, todo: string) => {
    setEditingItemId(id);
    setEditTitle(title);
    setEditTodo(todo);
  };

  // save and edit function
  const saveEdit = async () => {
    const editedData = todo.map((item: any) =>
      item.id === editingItemId
        ? {...item, title: editTitle, todo: editTodo}
        : item,
    );
    setTodos(editedData);
    await AsyncStorage.setItem('todos', JSON.stringify(editedData));
    setEditingItemId(null);
    setEditTitle('');
    setEditTodo('');
  };

  // edit -- cancle function
  const cancelEdit = () => {
    setEditingItemId(null);
    setEditTitle('');
    setEditTodo('');
  };

  const renderTodos = ({item}: any) => {
    return (
      <View>
        <View style={styles.todoList}>
          <View style={styles.application}>
            <View style={styles.box}>
              <View style={styles.data}>
                <Text style={{fontSize: 20, color: 'black', flexWrap: 'wrap'}}>
                  Title: {item.title}
                </Text>
                <View
                  style={{
                    width: 220,
                    borderWidth: 0.2,
                    borderColor: 'black',
                    marginTop: 5,
                  }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    marginTop: 7,
                    flexWrap: 'wrap',
                  }}>
                  Todo: {item.todo}
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: 'green',
                  flexDirection: 'row',
                  marginLeft: 255,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  height: 80,
                  borderRadius: 10,
                }}>
                <TouchableOpacity onPress={() => deleteItem(item.id)}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      padding: 10,
                      borderRadius: 20,
                    }}>
                    <Image
                      source={require('../../assests/delete.png')}
                      style={{height: 30, width: 30}}
                    />
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    height: 50,
                    borderWidth: 0.7,
                    borderColor: 'black',
                    marginTop: 5,
                  }}
                />
                <TouchableOpacity
                  onPress={() => startEditing(item.id, item.title, item.todo)}>
                  <View
                    style={{
                      // marginLeft: -1,
                      // backgroundColor: 'green',
                      padding: 10,
                      borderRadius: 20,
                    }}>
                    <Image
                      source={require('../../assests/edit.png')}
                      style={{height: 30, width: 30}}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={todo}
        renderItem={renderTodos}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {editingItemId !== null && (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.editInput}
            placeholder="Edit Title"
            value={editTitle}
            onChangeText={text => setEditTitle(text)}
          />
          <TextInput
            style={styles.editInput}
            placeholder="Edit Todo"
            value={editTodo}
            onChangeText={text => setEditTodo(text)}
          />
          <View style={styles.editBtnView}>
            <TouchableOpacity onPress={saveEdit}>
              <View
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 15,
                }}>
                <Text style={styles.saveButton}>Save</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={cancelEdit}>
              <View
                style={{
                  marginLeft: 20,
                  backgroundColor: 'red',
                  padding: 10,
                  borderRadius: 15,
                }}>
                <Text style={styles.saveButton}>Cancle</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  todoList: {
    marginTop: -10,
  },
  application: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginRight: 12,
  },
  box: {
    width: 250,
    marginRight: 93,
    backgroundColor: '#c49807',
    marginTop: 5,
    flexDirection: 'row',
    borderRadius: 10,
  },
  data: {
    flexDirection: 'column',
    padding: 10,
  },
  editContainer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 200,
    width: 400,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  editInput: {
    width: 380,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 25,
    borderBottomWidth: 3,
    fontSize: 20,
    fontWeight: '500',
  },
  saveButton: {
    color: 'black',
    fontSize: 18,
  },
  editBtnView: {
    flexDirection: 'row',
  },
  space: {
    marginLeft: 20,
  },
});

export default TodoWork;
/* eslint-disable */

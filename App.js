import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Keyboard, ScrollView } from 'react-native';
import Task from './components/Tasks';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container} >
      <View style={styles.$container}></View>
      
    <View style={styles.box}></View>
    <Text style={styles.sectionTitle}>Todo List</Text>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={styles.tasksWrapper}>
      
        <View style={styles.items}>
        
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
            
          }
          
        </View>
      </View>
        
      </ScrollView>

     
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Input text'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDD48',
    borderWidth: 1,
    borderColor: '#3D5BC0',
    borderRadius: 20,

  },
    $container:{
    position:'absolute',
    width:340,
    height:710,
    marginTop:171,
    alignSelf:"center",
    backgroundColor: '#3D5BC0',
    borderRadius: 20,
    borderWidth:2
  },
  box:{
    position:'absolute',
    width:340,
    height:100,
    marginTop:60,
    alignSelf:"center",
    backgroundColor: '#3D5BC0',
    borderRadius: 20,
    borderWidth:2
    
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    position:'relative',
    marginTop:85,
    marginLeft:125,
    fontSize:28,
    fontWeight:'bold',
    fontStyle:'italic',
    marginBottom: 38,
    color:"#F8FAFF",
    
  },
  items: {
    marginTop: -78,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    borderColor:'#000000',
    borderWidth:2,
    marginLeft:7,
    width:310,
  },
  addWrapper: {
    width:60,
    height:50,
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#000000',
    borderWidth:2,
    marginRight:8
  },
  addText: {
    marginTop:-11,
    fontSize:40,
    color:"#3D5BC0",
  },
});

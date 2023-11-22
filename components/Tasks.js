import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFFFFF',
      padding:30,
      backgroundRadius: 10,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-between',
      marginBottom:20,
      borderWidth:2,
      borderRadius:20
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    square: {
      width:24,
      height:24,
      backgroundColor: '#000000',
      opacity: 0.5,
      borderRadius: 5,
      marginRight: 20,
      
    },
    itemText: {
      maxWidth: '80%',
    },
  
  
  
  });
  
  export default Task;
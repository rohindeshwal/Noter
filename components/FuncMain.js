import React, { useState, useEffect } from 'react';
import {TextInput,TouchableOpacity,StyleSheet,ScrollView,View,Text,StatusBar, FlatList,} from 'react-native';
import axios from 'axios';
import Note from './Note'

function FuncMain() {

    const [notes, setNotes]= useState([]); 

    const getApi = async () => {   
        const userNotes = await axios.get ("https://jsonplaceholder.typicode.com/users"); 
        setNotes(userNotes.notes);
        // console.warn("jdjd",userNotes);
    }

    useEffect(() => {
        getApi();
    },[])

    return(
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headreText}>Notes</Text>
          </View>
          <ScrollView style={styles.scrollContainer}>
            {notes}
          </ScrollView>
          <View style={styles.footer}>
              <TextInput 
              style={styles.textInput}
              onChangeText={notes => setNotes(notes)}
              value={notes}
              placeholder='Noter'
              placeholderTextColor='#aabcff'
              underlineColorAndroid='#aaffdc'>
              </TextInput>
          </View>
 
            <TouchableOpacity onPress={() => {setNotes(notes)}} style={styles.addButton} >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
      </View>
    )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
      backgroundColor:'#E91E63',
      alignItems:'center',
      justifyContent:'center',
      borderBottomWidth:2,
      borderBottomColor:'#000',
      height:50
  },
  headreText:{
      color:'#fff',
      fontSize:20,
      padding:26
  },
  scrollContainer:{
      flex:1,
      marginBottom:100,
  },
  footer:{
     position:'absolute',
     flex:1,
     bottom:0, left:0,right:0,
     
  },
  textInput:{
      alignSelf:'stretch',
      color:'#fff',
      padding:15,
      backgroundColor:'grey',
  },
  addButton:{
      position:'relative',
      backgroundColor:'#E91E63',
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      elevation:8,
      width:70,
      height:70,
      right:0,
      left:350,
      bottom:90,
  },
  addButtonText:{
      color:'#fff',
      fontSize:20
  }
})


export default FuncMain;
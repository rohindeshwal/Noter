import React from 'react';
import {TextInput,TouchableOpacity,StyleSheet,ScrollView,View,Text,StatusBar, FlatList,} from 'react-native';
import Note from './Note'

export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            noteArray:[],
            noteText:'',
        }
      }

    addNote(){
       if(this.state.noteText){
           var d=new Date();
           this.state.noteArray.push({
               "date":d.getFullYear()+
               "/" +(d.getMonth()+1) +
               "/" + d.getDate() +
               " " + d.getHours() +
               ":" + d.getMinutes()+
               ":" + d.getSeconds()+
               ":" + d.getMilliseconds(),
               "note": this.state.noteText
           });
           this.setState({noteArray:this.state.noteArray})
           this.setState({noteText:''});
       }
    }

    deleteNote(key) {
        this.state.noteArray.splice(key,1);
        this.setState({noteArray: this.state.noteArray})
    }



  render(){

    // console.warn("render", this.state.noteArray);
    
    let notes= this.state.noteArray.map((val, key) => {
        return <Note key={key} keyval={key} val= {val} 
               deleteMethod={ () => this.deleteNote(key)} />
    });
    
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
              onChangeText={(noteText) => this.setState({noteText})}
              value={this.state.noteText}
              placeholder='Noter'
              placeholderTextColor='#aabcff'
              underlineColorAndroid='#aaffdc'>
              </TextInput>
          </View>

            <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton} >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
      </View>
    )

  }
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
import React from 'react';
import {TextInput,TouchableOpacity,StyleSheet,ScrollView,View,Text,StatusBar,} from 'react-native';


export default class Note extends React.Component{
  render(){
    return(
      <View key={this.props.keyval} styles={styles.note}>

          <Text styles={styles.noteText}>{this.props.val.date}</Text>
          <Text styles={styles.noteText}>{this.props.val.note}</Text>
          <Text styles={styles.noteText}>{this.props.val.time}</Text>

          <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
              <Text style={styles.noteDeleteText}>Delete</Text>
          </TouchableOpacity>

      </View>
    )
  }
}

const styles= StyleSheet.create({
    note:{
        position:'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor:'#ededed',
    },
    noteText:{
        paddingLeft:20,
        borderLeftWidth:10,
        borderLeftColor:'#E91E63',
    },
    noteDelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2980b9',
        padding:10,
        top : 10,
        bottom: 10,
        right:10,
    },
    noteDeleteText:{
        color:'white',
    }
})
import React from 'react';
import {FlatList,StyleSheet,View,Text,StatusBar,} from 'react-native';


export default class New extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            noteArray:[],
        }
    }
    componentDidMount(){
      this.apiData();
    }

    async apiData() {
      let res= await fetch("https://reactnative.dev/movies.json");
      let resJson= await res.json();
      this.setState({noteArray:resJson.movies})
      console.warn("resJson" , resJson);
    } 
  render(){
      
    return(
      <View styles={styles.note}>
          <Text style={{fontSize:30}}>Api data</Text>
            <FlatList 
            data={this.state.noteArray}
            renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </View>
    )
  }
}


const styles= StyleSheet.create({
    note:{
        backgroundColor:'#fff'
    }
});
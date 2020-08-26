import React from 'react';
import {TextInput,TouchableOpacity,StyleSheet,ScrollView,View,Text,StatusBar,} from 'react-native';
import axios from 'axios';

export default class Main extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],
        }
    }
    componentDidMount(){
        this.getApiData();
    }

    async getApiData(){
        let resp= await axios("https://reactnative.dev/movies.json");
        console.warn(resp.data.movies);
        this.setState({data:resp.data.movies})
    }


  render(){
    return(
      <View style={styles.container}>
          {/* <Text>AXIOS API</Text> */}
          {
              this.state.data.length > 0 ?
              <View>
                  {
                      this.state.data.map((item)  =>
                      <Text style={{fontSize:40,padding:6, margin:15,backgroundColor:'#fffced'}}>{item.title}</Text>)
                  }
              </View> : <Text>data is loading......</Text>
          }
          <View>
            {
                <Text>{this.state.data.description}</Text>
            }
          </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:'#00aabc',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
import React from 'react';
import {StyleSheet,ActivityIndicator,View,Text,StatusBar,} from 'react-native';


export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: true,
            dataSource: null,
        }
    }
    componentDidMount(){
        return fetch("https://reactnative.dev/movies.json")
        .then((response)  => response.json() ) 
        .then((responseJson)  => {
            this.setState({
                isLoading: false,
                dataSource: responseJson.movies,
            })
        })

        .catch((error) => {
            console.log(error)
        })
    }

  render(){

    if(this.state.isLoading){
        return(
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        )
    } else{

        let movies= this.state.dataSource.map((val, key) => {
            return <View key={key}>
                   <Text>{val.title},{val.releaseYear}</Text>
                   </View>
        });
        return(
            <View style={styles.container}>
            {movies}
            </View>
        )
    }

    // return(
    //   <View styles={styles.note}>
    //       <Text>hiii there</Text>
    //   </View>
    // )
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
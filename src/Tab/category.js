import React,{Component} from 'react';
import{
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList
}from 'react-native';
import {createIconSet} from 'react-native-vector-icons';
import axios from 'axios';
export default class Category extends Component{
  constructor(){
    super();
    this.state={
      loader:false,
      DATA:[]
    }
  }
  getData(){
    this.setState({loader:true})
    fetch('https://api.sampleapis.com/coffee/hot')
    .then((response)=>response.json)
    .then((response)=>{
      if(response.length>0)
      {
        this.setState({DATA:response})
      }
      this.setState({loader:false})
      console.log("Response is:",response)})
    .catch((error)=>{
      this.setState({loader:true})
      console.log("Error is:",error)})
  }
  getAxiosData(){
    this.setState({loader:true})
    axios.get('https://api.sampleapis.com/coffee/hot')
    .then((response)=>{
      this.setState({DATA:response})
      this.setState({loader:false})
    console.log("Axiosresponde",response)
    })
    .catch((error)=>{
      this.setState({loader:false})
      console.log("Error is",error)
    })
  }
  // componentDidCatch(){
    // this.getData()
  // }
  render(){
    const renderItem=({item})=>(
      <View style={styles.itemcontainer}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      </View>

    )
    return(
      <View style={styles.container}>
      <ActivityIndicator size='large' color='green' animating={this.state.loader}/>
      <Text style={styles.hometxt} onPress={()=>this.getAxiosData()}>This is Catgory list</Text>
      // <Text>{this.state.DATA}</Text>
      <FlatList style={{width:"95%",marginTop:10}}
      data={this.state.DATA}
      renderItem={renderItem}/>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  hometxt:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'
  },
  itemcontainer:{
    width:'100%',
    padding:10,
    backgroundColor:'yellow',
  }
})
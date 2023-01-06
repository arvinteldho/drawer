import React,{Component} from 'react';
import{
  View
}from 'react-native';
import{WebView} from 'react-native-webview';
export default class web extends Component{
  render(){
     return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
  }
}
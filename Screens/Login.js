
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, TextInput,Dimensions, } from 'react-native';
import  ButtonSign   from './Button';
//import { ButtonGradient } from './Button';
//import Svg, {Path, Defs, LinearGradient,Stop} from 'react-native-svg';
//import { LinearGradient } from 'expo-linear-gradient';
const {width,height} = Dimensions.get('window')






export default function App() {
  return (
    <View style={styles.container}>    
  
        <Text style={styles.titulo1}> UNPHU  </Text>
        <Text style={styles.titulo2}>Parking</Text>
        <Text style={styles.subTitle}>Iniciar Sesion</Text>
        <StatusBar style="auto" />
        <TextInput
        placeholder="Examp@unphu.edu.do"
        style={styles.textInput}
        />
        <TextInput
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <Button title='cambio' onPress={() =>navigator.navigate('mainS')}>Dale aqui</Button>
        {/* el onPress lo puedes borrar de aca y dejar que el componente del boton lo tenga adentro no es necesario pasar la funcion desde aca */}
        {/* al menos que a ti te gusta y ese sea tu estilo jaja xDDD por ahora asi lo entiendo  */}
        {/* <ButtonSign  onPress={() =>navigator.navigate('mainS')}/> */}
      </View>
    )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo1:{
      fontSize:50,
      color:'#48e375',
      paddingStart:50,
    },
    titulo2:{
      fontSize:45,
      color:'black',
    },
    subTitle:{
      fontSize: 20,
    },
    textInput: {
      // borderWidth: 1,
      // borderColor:'gray',
      padding: 10,
      width: '80%',
     
      marginTop:20,
      borderRadius:30,
      backgroundColor:'#fff',

    },
    forgotPassword:{
      fontSize:15,
      color:'black',
    },
  });











import React from "react";
import { View } from "react-native";
import {View,Button,Text} from 'react-native'

export default function Login({navigator}){
    <View>
        <Text>Hola</Text>
        <Button title='cambio' onPress={() =>navigator.navigate('mainS')}>Dale aqui</Button>
    </View>
}




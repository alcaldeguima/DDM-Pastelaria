import * as React from 'react'
import {Text, TextInput, View, StatusBar} from 'react-native'
import style from '../../src/style'

export default function Teste(props){

  return(
      <View style={style.container}>  
      <StatusBar backgroundColor="black"/>
        <Text style={style.font}>{props.desc}</Text>
        <TextInput style={style.inputs}
          underlineColorAndroid="transparent"
          placeholder="0"
          autoCapitalize="none"
          keyboardType="numeric"
          
         />
      </View>
    )
  }
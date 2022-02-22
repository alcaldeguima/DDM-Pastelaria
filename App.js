import * as React from 'react'
import {Text, TouchableOpacity, TextInput, View, StatusBar} from 'react-native'
import style from './src/style'

export default class App extends React.Component{
  
  state={
    carne: 0.0,
    queijo: 0.0,
    strogonoff: 0.0,
    
    lata: 0,
    seiscentos: 0,
    litro: 0
  }

  setCarne=(number)=>{
    this.setState({carne:number})
  }

  setQueijo=(number)=>{
    this.setState({queijo:number})
  }

  setStrogonoff=(number)=>{
    this.setState({strogonoff:number})
  }

  setLata=(number)=>{
    this.setState({lata:number})
  }

  setSeiscentos=(number)=>{
    this.setState({seiscentos:number})
  }

  setLitro=(number)=>{
    this.setState({litro:number})
  }

  render(){
    return(
      <View style={style.container}>

      <StatusBar backgroundColor="black"/>
        <Text>Pastel de Carne R$ 5,00</Text>
        <TextInput style={style.input}
          underlineColorAndroid="transparent"
          placeholder="0"
          autoCapitalize="none"
          onChangeText={this.setCarne}
          keyboardType="numeric"
         />

      <StatusBar backgroundColor="black"/>
        <Text>Pastel de Queijo R$ 3,00</Text>
          <TextInput style={style.input}
            underlineColorAndroid="transparent"
            placeholder="0"
            autoCapitalize="none"
            onChangeText={this.setQueijo}
            keyboardType="numeric"
         />

      <StatusBar backgroundColor="black"/>
        <Text>Pastel de Strogonoff R$ WIP</Text>
          <TextInput style={style.input}
            underlineColorAndroid="transparent"
            placeholder="0"
            autoCapitalize="none"
            onChange={(event)=>{this.setStrogonoff *= event.target.value}}
            keyboardType="numeric"
         />
      <StatusBar backgroundColor="black"/>
        <Text>Refri Lata R$ WIP</Text>
          <TextInput style={style.input}
            underlineColorAndroid="transparent"
            placeholder="0"
            autoCapitalize="none"
            onChangeText={this.setLata}
            keyboardType="numeric"
         />
      <StatusBar backgroundColor="black"/>
        <Text>Refri 600ml R$ WIP</Text>
          <TextInput style={style.input}
            underlineColorAndroid="transparent"
            placeholder="0"
            autoCapitalize="none"
            onChangeText={this.setSeiscentos}
            keyboardType="numeric"
         />
      <StatusBar backgroundColor="black"/>
        <Text>Refri 2L R$ WIP</Text>
          <TextInput style={style.input}
            underlineColorAndroid="transparent"
            placeholder="0"
            autoCapitalize="none"
            onChangeText={this.setLitro}
            keyboardType="numeric"
         />



         <TouchableOpacity style={style.submitButton}
          onPress={()=>{
            console.log(this.setStrogonoff)
          }}>
          <Text style={style.submitButtonText}>Calcular</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
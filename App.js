import * as React from 'react'
import {Text, TouchableOpacity, TextInput, View, StatusBar} from 'react-native'
import { Modal } from 'react-native-web'
import style from './src/style'

export default class App extends React.Component{
  
  precos={
    carne: 5.0,
    queijo: 3.0,
    strogonoff: 8.0,
    
    lata: 2.5,
    seiscentos: 4.0,
    litro: 5.5
  }

  state={
    carne: 0.0,
    queijo: 0.0,
    strogonoff: 0.0,
    
    lata: 0.0,
    seiscentos: 0.0,
    litro: 0.0
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
        <Text style={style.font}>Pastel de Carne R$ 5,00</Text>
        <TextInput style={style.input}
          underlineColorAndroid="transparent"
          placeholder="0"
          autoCapitalize="none"
          onChange={(event)=>{this.setCarne(parseFloat(event.target.value *  this.precos.carne))}}
          keyboardType="numeric"
         />
      <StatusBar backgroundColor="black"/>
        <Text style={style.font}>Pastel de Queijo R$ 3,00</Text>
          <TextInput style={style.input}
            underlineColorAndroid="transparent"
            placeholder="0"
            autoCapitalize="none"
            onChange={(event)=>{this.setQueijo(parseFloat(event.target.value *  this.precos.queijo))}}
            keyboardType="numeric"
         />

      <StatusBar backgroundColor="black"/>
        <Text style={style.font}>Pastel de Strogonoff R$ 8,00</Text>
          <TextInput style={style.input}
            underlineColorAndroid="transparent"
            placeholder="0"
            autoCapitalize="none"
            onChange={(event)=>{this.setStrogonoff(parseFloat(event.target.value *  this.precos.strogonoff))}}
            keyboardType="numeric"
         />
      <StatusBar backgroundColor="black"/>
        <Text style={style.font}>Refri Lata R$ 2,50</Text>
          <TextInput style={style.input}
            underlineColorAndroid="transparent"
            placeholder="0"
            autoCapitalize="none"
            onChange={(event)=>{this.setLata(parseFloat(event.target.value *  this.precos.lata))}}
            keyboardType="numeric"
         />
      <StatusBar backgroundColor="black"/>
        <Text style={style.font}>Refri 600ml R$ 4,00</Text>
          <TextInput style={style.input}
            underlineColorAndroid="transparent"
            placeholder="0"
            autoCapitalize="none"
            onChange={(event)=>{this.setSeiscentos(parseFloat(event.target.value *  this.precos.seiscentos))}}
            keyboardType="numeric"
         />
      <StatusBar backgroundColor="black"/>
        <Text style={style.font}>Refri 2L R$ 5,50</Text>
          <TextInput style={style.input}
            underlineColorAndroid="transparent"
            placeholder="0"
            autoCapitalize="none"
            onChange={(event)=>{this.setLitro(parseFloat(event.target.value *  this.precos.litro))}}
            keyboardType="numeric"
         />

         <TouchableOpacity style={style.submitButton}
          onPress={()=>{
            const result = 
             this.state.carne +
             this.state.queijo +
             this.state.strogonoff +
             this.state.lata +
             this.state.seiscentos + 
             this.state.litro

           alert(`o preço final é ${result}`)
          }}>
          <Text style={style.submitButtonText}>Calcular</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
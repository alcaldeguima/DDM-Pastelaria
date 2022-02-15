import * as React from 'react'
import {Text, TouchableOpacity, TextInput, View, StatusBar} from 'react-native'
import MeuEstilo from './src/style'

export default class App extends React.Component{
  state={
    valor1: 0.0,
    valor2: 0.0,
    resultado: 0.0
  }

  atualizaValor1=(number)=>{
    this.setState({valor1:number})
  }

  atualizaValor2=(number)=>{
    this.setState({valor2:number})
  }

  soma(){
    this.state.resultado=parseFloat(this.state.valor1) + 
    parseFloat(this.state.valor2)
    alert (this.state.resultado)
  }

  render(){
    return(
      <View style={MeuEstilo.container}>
      <StatusBar backgroundColor="black"/>

        <Text>Pastel de Carne R$ 5,00</Text>
        <TextInput style={MeuEstilo.input}
          underlineColorAndroid="transparent"
          placeholder="0"
          autoCapitalize="none"
          onChangeText={this.atualizaValor1}
          keyboardType="numeric"
         />

        <StatusBar backgroundColor="black"/>
        <Text>Pastel de Queijo R$ 3,00</Text>
        <TextInput style={MeuEstilo.input}
          underlineColorAndroid="transparent"
          placeholder="0"
          autoCapitalize="none"
          onChangeText={this.atualizaValor2}
          keyboardType="numeric"
         />

         <TouchableOpacity style={MeuEstilo.submitButton}
          onPress={()=>{
            this.soma(this.state.valor1, this.state.valor2, this.state.resultado)
          }}>
          <Text style={MeuEstilo.submitButtonText}>Calcular</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
import * as React from 'react'
import {Text, TouchableOpacity, TextInput, View, StatusBar} from 'react-native'
import MeuEstilo from './src/style'

export default class App extends React.Component{
  state={
    quanticarne: 0.0,
    quantiqueijo: 0.0,
    resultado: 0.0,
  }

  atualizaquanticarne=(number)=>{
    this.setState({quanticarne:number})
  }

  atualizaquantiqueijo=(number)=>{
    this.setState({quantiqueijo:number})
  }

  soma( quantiqueijo, quanticarne){
    const precocarne = 5.0
    const precoqueijo = 3.0
    this.state.resultado=parseFloat(quanticarne * precocarne) + parseFloat(quantiqueijo * precoqueijo)
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
          onChangeText={this.atualizaquanticarne}
          keyboardType="numeric"
         />

        <StatusBar backgroundColor="black"/>
        <Text>Pastel de Queijo R$ 3,00</Text>
        <TextInput style={MeuEstilo.input}
          underlineColorAndroid="transparent"
          placeholder="0"
          autoCapitalize="none"
          onChangeText={this.atualizaquantiqueijo}
          keyboardType="numeric"
         />

         <TouchableOpacity style={MeuEstilo.submitButton}
          onPress={()=>{
            this.soma(this.state.quanticarne, this.state.quantiqueijo)
          }}>
          <Text style={MeuEstilo.submitButtonText}>Calcular</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
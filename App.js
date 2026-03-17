import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';



function App() {
  const [img, setImg] = useState(require('./src/cartaFechada.png'))
  const[frase, setFrase] = useState('')

  function quebrar() {
    setImg(require('./src/cartaAberta.png'))
    let frases = [
      '"Hoje será um grande dia!"',
      '"Amanhã Voce terá uma grande surpresa!"',
      '"Parece que tem alguem de olho em voce!"',
      '"Acredite no seu potencial!"',
      '"Um passo de cada vez!"',
      '"Faça hoje valer a pena!"',
      '"Você é capaz de mais do que imagina!"'
    ]
    let fraseAleatoria = Math.floor(Math.random() * frases.length)
    
      setFrase(frases[fraseAleatoria])
    
  }

  function reniciar() {
    setImg(require('./src/cartaFechada.png'))
    setFrase('')
  }
return(
 <View style={styles.container}>
     <Text style={styles.titulo}>MENSAGEM DO DIA!</Text>
       <Image source={img}
       style={styles.img}/>
       <Text style={styles.fraseBiscoito}>{frase}</Text>
       <Pressable style={styles.botao} onPress={ quebrar }>
        <Text style={styles.texto}>Abrir Carta</Text>
       </Pressable>
       <Pressable style={styles.botao2} onPress={ reniciar }>
        <Text style={styles.texto2}>Fechar Carta</Text>
       </Pressable>
       
 </View>

)
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#191970'
    },
    titulo: {
    fontSize: 30,
    fontStyle: 'italic',
    color: 'white'
      },
    img: {
      width: 300,
      height: 300
    },
    botao: {
      width: 230,
      height: 50,
       borderRadius: 30,
       borderWidth: 2,
       borderColor: '#4169E1',
       backgroundColor: 'white', 
    },
    texto: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#4169E1',
      fontSize: 18,
      marginTop: 10,
      fontWeight: 'bold'
    },
    botao2: {
      width: 230,
      height: 50,
      marginTop: 10,
       borderRadius: 30,
       borderWidth: 2,
       borderColor: 'black',
       backgroundColor: 'white', 
    },
    texto2: {
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'black',
      marginTop: 10,
      fontSize: 18,
      fontWeight: 'bold'
    },
    fraseBiscoito: {
      fontSize: 20,
      color: 'white',
      marginBottom: 60,
      fontStyle: 'italic',
      textAlign: 'center'
    }
})
export default App
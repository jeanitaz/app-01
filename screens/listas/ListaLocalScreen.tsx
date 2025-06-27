import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import datos from "../../assets/data/characters.json"
import Tarjeta from '../../components/Tarjeta'

const ListaLocal = () => {
  const [lista, setlista] = useState([
    {
      "cedula":"1724617053",
      "nombre":"Jean Carlos",
      "edad":24
    },
    {
      "cedula":"1724617054",
      "nombre":"Ariel Alcivar",
      "edad":23
    },
    {"cedula":"1724617054",
      "nombre":"Madelinne Granados",
      "edad":22
    }
  ])
  return (
    <View>
      <Text>Lista Local</Text>
      <FlatList
      data={datos}
      renderItem={({item})=> 
        <Tarjeta informacion={item}/>
      }
      />
    </View>
  )
}

export default ListaLocal

const styles = StyleSheet.create({
  txt:{
    fontSize: 20,
  },
  img:{
    width: 20,
    height: 20
  },
})
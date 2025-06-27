import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tarjeta2 from '../../components/Tarjeta2';

export default function ListaLocalExterna ()
{
    const [datos, setdatos] = useState([])

    async function leer(){
        const resp = await fetch('https://jritsqmet.github.io/web-api/assets/data/api2/sections/crash-s.json');
        const json = await resp.json();
        setdatos(json);
    }

    useEffect(() => {
        leer();
        console.log(datos);
    }, [])
  return (
    <View>
      <Text>Lista Externa</Text>
      <SectionList
      sections={datos}
      renderItem={({item})=> (
        <View>
        <Tarjeta2 informacion={item}/>
        </View>
      )}
      renderSectionHeader={({section:{title}})=> <Text style={styles.txt}>{title}</Text>}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    txt:{
        fontSize: 20
    },
})
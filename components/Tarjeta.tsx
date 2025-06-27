import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Tarjeta = (props : any) => {
    //console.log(props.informacion.images.main);

    function mostrarMas(data: any){
        Alert.alert("Informacion", data.name.first + "Trabaja como:" + data.occupation);
        //alert("Informacion", data.name.first + "Trabaja como:" + data.occupation) =======> Para visualizar en web
    }
return (
    <TouchableOpacity onPress={() => mostrarMas(props.informacion)} style={styles.btn}>
        <Image source={{uri: props.informacion.images.main}} style={styles.img} />
        <Text style={styles.txtInfo}>{props.informacion.name.first} {props.informacion.name.last}</Text>
        <Text style={styles.txtInfo}>{props.informacion.gender}</Text>
        <Text style={styles.txtInfo}>{props.informacion.occupation}</Text>
        <Text style={styles.txtInfo}>{props.informacion.homePlanet}</Text>
    </TouchableOpacity>
)
}

export default Tarjeta

const styles = StyleSheet.create({
    img:{
        width: 180, 
        height: 180,
        resizeMode: 'contain',
        backgroundColor: "#0df2c9"
    },
    txt:{
        fontSize: 20
    },
    btn:{
        backgroundColor: '#b6fc7e',
        margin: 5,

    },
    txtInfo:{
        textAlign: 'center',
        fontSize: 20,
        color: 'black'
    }
})
import { Alert, Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Tarjeta2 = (props: any) => {
    //console.log(props);

    const [visible, setvisible] = useState(false)

    const gifUrl = 'https://i.gifer.com/origin/52/52652e767aa85b8ecf4cf2224b51b9f6_w200.gif';


    return (
        <View>
            <TouchableOpacity onPress={() => setvisible(!visible)}>
                <Text >{props.informacion.titulo}</Text>
                <Image source={{ uri: props.informacion.imagen }} style={styles.img} />
            </TouchableOpacity>
            <Modal visible={visible} transparent animationType="slide">
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Image
                            source={{ uri: gifUrl }}
                            style={styles.gifBackground}
                            resizeMode="cover"
                        />
                        <View style={styles.modalContent}>
                            <Text style={styles.title}>{props.informacion.peliculas}</Text>
                            <Text style={styles.text}>ID: {props.informacion.id}</Text>
                            <Image source={{ uri: props.informacion.image }} style={styles.img} />
                            <Text style={styles.description}>{props.informacion.lanzamiento}</Text>
                            <Text style={styles.text}>Atributos: {props.informacion.precio}</Text>
                            <View style={styles.buttonContainer}>
                                <Button title="Cerrar" onPress={() => setvisible(!visible)} color="#2196F3" />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>


        </View>
    )
}

export default Tarjeta2

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '85%',
        height: '80%',
        borderRadius: 15,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 0.7,
    },
    gifBackground: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },
    modalContent: {
        padding: 20,
        alignItems: 'center',
        width: '100%',
    },
    img: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#fff',
    },
    description: {
        fontSize: 16,
        color: '#f0f0f0',
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 5,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
    },
});



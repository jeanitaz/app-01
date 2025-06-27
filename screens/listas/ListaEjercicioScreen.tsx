import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';

export default function ListaEjercicioScreen() {
    const [datos, setdatos] = useState([]);

    async function ver() {
        const resp = await fetch('https://jritsqmet.github.io/web-api/peliculas3.json');
        const json = await resp.json();
        setdatos(json.peliculas);
    }

    useEffect(() => {
        ver();
        console.log(datos);
    }, [])
    return (
        <View>
            <Text style={styles.txt}>Lista De Peliculas</Text>
            <FlatList
                data={datos}
                renderItem={({ item }) => (
                    <View>
                        <Cards informacion={item} />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'purple',
    },
});

import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

 export const DireccionScreen = () => {
    const [registro, setregistro] = useState(
        {
            Calle: '',
            NúmeroEx: '',
            Ciudad: '',
            Referencias: '',
        }
    );

    const [errors, setErrors] = useState({
            Calle: '',
            NúmeroEx: '',
            Ciudad: '',
            Referencias: '',
        }
    );

    
return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.formContainer}>
    <Text style={styles.title}>Regitro De Dirección</Text>
    

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Calle</Text>
            <TextInput
            style={[styles.input, errors.Calle && styles.inputError]}
            placeholder="Ingresa tu calle"
            value={registro.Calle}
            />
            {errors.Calle ? <Text style={styles.errorText}>{errors.Calle}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>N°</Text>
            <TextInput
            style={[styles.input, errors.NúmeroEx && styles.inputError]}
            placeholder="Ingresa tu numero de casa"
            value={registro.NúmeroEx}
            />
            {errors.NúmeroEx ? <Text style={styles.errorText}>{errors.NúmeroEx}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Ciudad</Text>
            <TextInput
            style={[styles.input, errors.Ciudad && styles.inputError]}
            placeholder="Ingresa tu Ciudad"
            value={registro.Ciudad}
            />
            {errors.Ciudad ? <Text style={styles.errorText}>{errors.Ciudad}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Referencias</Text>
            <TextInput
            style={[styles.input, errors.Referencias && styles.inputError]}
            placeholder="Ingresa una Referencia"
            value={registro.Referencias}
            />
            {errors.Referencias ? <Text style={styles.errorText}>{errors.Referencias}</Text> : null}
        </View>
        </View>
    </ScrollView>
)
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4f46e5',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    color: '#1e293b',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ef4444',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginTop: 4,
  },
  switchContainer: {
    marginBottom: 16,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#4f46e5',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})
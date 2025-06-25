import { Alert, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


 export const RegitroUsuarioScreen = () => {
    const [registro, setregistro] = useState(
        {
            nombre: '',
            apellido: '',
            email: '',
            contrasena: '',
            confirmarcontrasena: '',
            telefono: ''

        }
    );

    const [errors, setErrors] = useState({
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            contrasena: '',
            confcontrasena: '',
        }
    );

    const validar = () => {
    let validar = true;
    const newErrors = {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        contrasena: '',
        confcontrasena: '',
    };

    if (!registro.nombre.trim()) {
    newErrors.nombre = 'Por favor ingresa tu nombre';
    validar = false;
    }
    }

    const handleSubmit = () => {
    if (validar()) {
        Alert.alert(
        'Registro exitoso', 
        '¡Gracias por registrarte!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );}
    }
    
return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.formContainer}>
    <Text style={styles.title}>Regitro De Usuario</Text>
    

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
            style={[styles.input, errors.nombre && styles.inputError]}
            placeholder="Ingresa tu nombre"
            value={registro.nombre}
            />
            {errors.nombre ? <Text style={styles.errorText}>{errors.nombre}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Apellido</Text>
            <TextInput
            style={[styles.input, errors.apellido && styles.inputError]}
            placeholder="Ingresa tu apellido"
            value={registro.apellido}
            />
            {errors.apellido ? <Text style={styles.errorText}>{errors.apellido}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="Ingresa tu email"
            value={registro.email}
            />
            {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Telefono</Text>
            <TextInput
            style={[styles.input, errors.telefono && styles.inputError]}
            placeholder="Ingresa tu telefono"
            value={registro.telefono}
            />
            {errors.telefono ? <Text style={styles.errorText}>{errors.telefono}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
            style={[styles.input, errors.contrasena && styles.inputError]}
            placeholder="Ingresa tu contraseña"
            value={registro.contrasena}
            secureTextEntry
            />
            {errors.contrasena ? <Text style={styles.errorText}>{errors.contrasena}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirmar contraseña</Text>
            <TextInput
            style={[styles.input, errors.confcontrasena && styles.inputError]}
            placeholder="Confirma tu contraseña"
            value={registro.confirmarcontrasena}
            secureTextEntry
            />
            {errors.confcontrasena ? <Text style={styles.errorText}>{errors.confcontrasena}</Text> : null}
        </View>
        <View style={styles.switchContainer}>
        <View style={styles.switchRow}>
        <Switch
            value={registro.subscribeNewsletter}
            onValueChange={(value) => handleChange('subscribeNewsletter', value)}
            thumbColor={registro.subscribeNewsletter ? '#4f46e5' : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#4f46e580' }}
        />
        <Text style={styles.switchLabel}>Suscribirme al boletín de noticias</Text>
        </View>
    </View>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
    </TouchableOpacity>
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
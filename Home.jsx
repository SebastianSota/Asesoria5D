import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, TextInput, Button } from 'react-native'

export function Home() {

    const navigation = useNavigation();

    const [person, setPerson] = useState([]);
    const [nombre, setNombre] = useState();
    const [edad, setEdad] = useState();

    const navegarAPerfil = (numeros) => {
        setPerson(prevPerson => [...prevPerson, numeros]);
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TextInput value={nombre}
                onChangeText={setNombre}
                placeholder='Nombre' />
            <TextInput value={edad}
                onChangeText={setEdad}
                placeholder='Edad' />
            <Button title='Ir a mi perfil' onPress={navegarAPerfil} />
        </View>
    );
}
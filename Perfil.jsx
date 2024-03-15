import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

Perfil = () => {

    const route = useRoute();
    const { person } = route.params ? route.params : "";

    useEffect(() => {
        console.log(person);
    }, [person]);

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>Nombre: {person?.nombre}</Text>
            <Text>Edad: {person?.edad}</Text>
        </View>
    );
}

export default Perfil;
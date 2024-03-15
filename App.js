import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Home";
import Perfil from "./Perfil";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Perfil} name="Perfil" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

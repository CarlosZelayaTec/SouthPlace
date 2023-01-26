import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Login } from '../Screens/index';

const homeStack = createStackNavigator();

const HomeStackScreen = () => {
    return(
        <homeStack.Navigator>
            <homeStack.Screen name="Login" component={ Login } />
            <homeStack.Screen name="Home" component={ Home } />
        </homeStack.Navigator>
    )
}

export default () => {
    return(
        <NavigationContainer>
            <HomeStackScreen />
        </NavigationContainer>
    )
}
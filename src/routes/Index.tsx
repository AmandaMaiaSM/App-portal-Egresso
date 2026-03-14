import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "../navigation/DrawerNavigator";
import Login from "../app/login/Login";


export default function Routes() {
    return (
        <NavigationContainer>
            <Login />
            <DrawerNavigator />
        </NavigationContainer>
    );
}
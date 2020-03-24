import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FavoriteNavigator from './FavoriteNavigator';
import MealsNavigator from './MealsNavigator';
import MyTabs from './tabNavigator';
const Drawer = createDrawerNavigator();
const DrawerNav = (props) => {
    return (
        <>
            <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={MealsNavigator} />
                <Drawer.Screen name="Filter Screen" component={FavoriteNavigator} />
            </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export default DrawerNav;
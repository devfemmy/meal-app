import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';
import { Platform, Button } from 'react-native';
// import {HeaderButtons, Item} from 'react-navigation-header-buttons'
// import CustomHeaderButton from '../components/HeaderButton';
import FavoriteScreen from '../screens/FavoriteScreens';
import FilterScreen from '../screens/FilterScreens';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton';

const Stack = createStackNavigator();

const FavoriteNavigator = (props) => {
    return (
        <>
        <Stack.Navigator>
          <Stack.Screen name="Filter" component={FilterScreen}
          options={{ title: 'Filter Screen', headerStyle: {
              backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',

          },
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent= {CustomHeaderButton}>
              <Item title= "Favourite"
                iconName= "ios-menu"
                onPress= {() => {props.navigation.openDrawer();}} />
            </HeaderButtons>

            // <Button
            //   onPress={() => alert('This is a button!')}
            //   title="Info"
            //   color="red"
            // />
          ), 
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent= {CustomHeaderButton}>
              <Item title= "Save"
                iconName= "ios-save"
                onPress= {() => {props.navigation.openDrawer();}} />
            </HeaderButtons>

            // <Button
            //   onPress={() => alert('This is a button!')}
            //   title="Info"
            //   color="red"
            // />
          ),
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }}
          />
          <Stack.Screen name="Favorite" options={{ title: 'Favourite', headerStyle: {
              backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',

          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }} component={FavoriteScreen} />
        </Stack.Navigator>
      </>
    )
}


export default FavoriteNavigator;
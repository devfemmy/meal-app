import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../screens/CategoriesScreen';
import CategoryMeal from '../screens/CategoryMeals';
import MealsDetailScreen from '../screens/MealsDetailsScreen';
import Colors from '../constants/Colors';
import { Platform, Button } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton';

const Stack = createStackNavigator();

const MealsNavigator = (props) => {
    return (
        <>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={CategoryScreen}
          options={{ title: 'Category Screen', headerStyle: {
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
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }}
          />
          <Stack.Screen name="CategoryMeals" options={{ title: 'Category Meal', headerStyle: {
              backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',

          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }} component={CategoryMeal} />
          <Stack.Screen name="Details2" options={{ title: 'Meals Detail Screen', headerStyle: {
              backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',

          },
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent= {CustomHeaderButton}>
              <Item title= "Favourite"
                iconName= "ios-star"
                onPress= {() => {console.log('Mark as Fav')}} />
            </HeaderButtons>

            // <Button
            //   onPress={() => alert('This is a button!')}
            //   title="Info"
            //   color="red"
            // />
          ),
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }} component={MealsDetailScreen} />
        </Stack.Navigator>
      </>
    )
}


export default MealsNavigator;
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealsNavigator from './MealsNavigator';
import FavoriteNavigator from './FavoriteNavigator';



const Tab = createBottomTabNavigator();

const  MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MealsNavigator} />
      <Tab.Screen name="Favorite" component={FavoriteNavigator} />
    </Tab.Navigator>
  );
}

export default MyTabs;
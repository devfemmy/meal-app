import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {CATEGORIES} from '../dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';





const CategoryScreen = props => {
    const renderGridItem = (itemData) => {
        return (
           
                <CategoryGridTile 
                title = {itemData.item.title} 
                color= {itemData.item.color}
                onSelect = {
                    () => {
                        props.navigation.navigate('CategoryMeals', {
                            categoryId: itemData.item.id
                        })
                    }
                } />
      
    
        
          )
        };
    return (
        <>
       <FlatList data= {CATEGORIES} renderItem= {renderGridItem} numColumns={2} />
       </>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // gridItem: {
    //     flex: 1,
    //     margin: 15,
    //     height: 150,
        
    // }
})

export default CategoryScreen;
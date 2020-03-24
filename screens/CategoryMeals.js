import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {CATEGORIES, MEAL} from '../dummy-data';
import MealItem from '../components/MealItem';

const CategoryMeal = props => {
    const renderMealItem = itemData => {
        console.log('itemData Title', itemData.item.title)
        return (
            <MealItem title= {itemData.item.title}
            duration = {itemData.item.duration}
            complexity= {itemData.item.complexity}
            affordability = {itemData.item.affordability}
            image = {itemData.item.imageUrl}
            OnSelectMeal = {() => {
                props.navigation.navigate('Details2', {
                    mealId: itemData.item.id
                })
            }} />
        )
    }
    const { categoryId } = props.route.params;
    console.log('catId', categoryId)

   const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)
   const displayMeals = MEAL.filter(
       meal => meal.categoryIds.indexOf(categoryId) >= 0);
    return (
        <View style= {styles.screen}>
            <FlatList data= {displayMeals}
            style= {{width: '100%'}}
            renderItem = {renderMealItem} />
            {/* <Text>The Category Meal</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title= "Go To Details" onPress= {() => {
                props.navigation.navigate('Details2')
            }} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMeal;
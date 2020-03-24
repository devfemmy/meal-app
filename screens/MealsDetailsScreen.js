import React from 'react';
import {View, Text, StyleSheet,ScrollView, Image, SafeAreaView} from 'react-native';
import {MEAL} from '../dummy-data';

const MealsDetailScreen = props => {
    const { mealId } = props.route.params;

    const selectedMeal = MEAL.find(meal => meal.id === mealId);
    console.log('meal', mealId)
    return (
        <SafeAreaView>
            <ScrollView>
            <Image source= {{uri: selectedMeal.imageUrl}} style= {styles.image} />
            <Text style= {styles.titleMeal}>{selectedMeal.title}</Text>
            <View style= {styles.details}>
                <Text>{selectedMeal.duration}</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            <Text style= {styles.descrip}>{selectedMeal.ingredients.map(ing => <Text key= {ing}>
                {ing}
            </Text>)}</Text>
            <Text style={styles.title}>Steps</Text>
            <Text style= {styles.descrip}>{selectedMeal.steps.map(step => <Text key= {step}>
                {step}
            </Text>)}</Text>
        </ScrollView>
        </SafeAreaView>

     
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    titleMeal: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'   
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    descrip: {
        fontFamily: 'open-sans',
        fontSize: 15,
        padding:15,
        paddingTop: 5,
        textAlign: 'justify',
    
        
    }
})

export default MealsDetailScreen;
import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import Color from '../constants/Colors';

const FilterScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVeganFree, setVaganFree] = useState(false);
    return (
        <View style= {styles.screen}>
            <Text style= {styles.title}>Available Filters / Restrictions</Text>
            <View style= {styles.filterContainer}>
                <Text>
                    Gluten-free
                </Text>
                <Switch 
                trackColor= {{true: Color.primaryColor}}

                value= {isGlutenFree} 
                onValueChange= {newValue => setIsGlutenFree(newValue)}  />
            </View>
            <View style= {styles.filterContainer}>
                <Text>
                    Vegan-free
                </Text>
                <Switch 
                trackColor= {{true: Color.primaryColor}}

                value= {isVeganFree} 
                onValueChange= {newValue => setVaganFree(newValue)}  />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
})

export default FilterScreen;
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const FoodItems = () => {
    const nav = useNavigation();
    const route = useRoute();

    const food = [
        {
            id: 1,
            name: 'Hamburguer',
            price: 25,
            image: require('../assets/hamburguerIMG.png'),
        },
        {
            id: 2,
            name: 'Pizza',
            price: 55,
            image: require('../assets/pizzaIMG.png'),
        },
        {
            id: 3,
            name: 'Sobremesas',
            price: 15,
            image: require('../assets/sobremesasIMG.png'),
        },
        {
            id: 4,
            name: 'Bebidas',
            price: 30,
            image: require('../assets/bebidasIMG.png'),
        },
    ];

    return (
        <View style={styles.viewPopular}>
            <Text style={styles.popularText}>Populares</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={food}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => {
                            nav.navigate('Details', { item });
                        }}
                        activeOpacity={0.8}
                    >
                        <View style={styles.popularBg}>
                            <Image source={item.image} style={styles.popularImage} />
                            <Text style={styles.itemText}>{item.name}</Text>
                            <View style={styles.itemBottom}>
                                <Text style={styles.priceText}>R$ {item.price}</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        nav.navigate('Details', { item });
                                    }}
                                >
                                    <Ionicons name="ios-add-circle" size={40} color="green" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewPopular: {
        gap: 25,
    },
    popularText: {
        fontSize: 25,
    },
    popularBg: {
        backgroundColor: '#e3e3e3',
        width: 150,
        height: 200,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    popularImage: {
        width: 120,
        height: 120,
    },
    itemText: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 25,
        marginTop: 10,
        textAlign: 'center',
    },
    itemBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 5,
    },
    priceText: {
        paddingHorizontal: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
    },
});

export default FoodItems;

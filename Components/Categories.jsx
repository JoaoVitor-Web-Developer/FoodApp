import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../utils/Colors';

const Categories = () => {
    const [selected, setSelected] = useState();

    const data = [
        { name: 'Todos', image: require('../assets/WelcomeIMG.png') },
        { name: 'Lanches', image: require('../assets/hamburguerIMG.png') },
        { name: 'Pizzas', image: require('../assets/pizzaIMG.png') },
        { name: 'Sobremesas', image: require('../assets/sobremesasIMG.png') },
        { name: 'Frutas', image: require('../assets/frutasIMG.png') },
        { name: 'Fitness', image: require('../assets/fitnessIMG.png') },
        { name: 'Bebidas', image: require('../assets/bebidasIMG.png') },
        { name: 'Outros', image: require('../assets/outrosIMG.png') },
    ];

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    onPress={() => {
                        setSelected(index);
                    }}
                    activeOpacity={0.8}
                    style={{ marginRight: 10, width: 90, height: 115 }}
                >
                    <View
                        style={[
                            styles.categoriesBg,
                            { backgroundColor: selected === index ? Colors.categorySelected : '#e3e3e3' },
                        ]}
                    >
                        <Image style={[
                            styles.categoriesImage,
                            { color: selected === index ? Colors.primary : 'gray' },

                        ]}
                            source={item.image} />
                    </View>
                    <Text style={styles.categoriesText}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
    );
};

const styles = StyleSheet.create({
    categoriesBg: {
        width: 90,
        height: 92,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    categoriesImage: {
        width: 75,
        height: 75,
    },
    categoriesText: {
        marginTop: 5,
        textAlign: 'center',
    },
});

export default Categories;

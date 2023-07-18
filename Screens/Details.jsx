import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import { colorful } from '../utils/Colors';
import { useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Details = () => {
    const route = useRoute();
    const { item } = route.params;

    return (
        <ScrollView style={{ backgroundColor: colorful.primary }}>
            <View style={styles.viewBgTop}>
                <View style={styles.bgImage}>
                    <Image source={item.image} style={styles.imageTop} />
                </View>
            </View>
            <View style={styles.bgBottom}>
                <View style={styles.descBottom}>
                    <View style={styles.scoreStyle}>
                        <Entypo name="star" size={24} color="gold" />
                        <Text style={styles.scoreText}>4.8</Text>
                    </View>
                    <Text style={styles.priceText}>R$ {item.price}</Text>
                </View>
                <View style={styles.viewItem}>
                    <Text style={styles.descText}>{item.name}</Text>
                    <View>
                        <Ionicons name='add-circle' size={24} color={colorful.primary} />
                        <Ionicons name='ios-remove-circle' size={24} color={colorful.primary} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBgTop: {
        height: 400,
        backgroundColor: colorful.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTop: {
        height: 230,
        width: 230,
    },
    bgImage: {
        backgroundColor: '#d3d3d3',
        borderRadius: 70,
    },
    bgBottom: {
        backgroundColor: 'white',
        height: 600,
        borderTopLeftRadius: 60,
        paddingHorizontal: 30,
        paddingTop: 40,
        gap: 20,
    },
    scoreStyle: {
        width: 83,
        height: 40,
        backgroundColor: colorful.primary,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    descBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    scoreText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    priceText: {
        color: colorful.primary,
        fontWeight: 'bold',
        fontSize: 22,
    },
    viewItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    descText: {
        color: colorful.primary,
        fontWeight: '500',
        fontSize: 25,
    }

})

export default Details;


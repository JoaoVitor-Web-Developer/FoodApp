import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Banner = () => {
    return (
        <View style={styles.viewPromotion}>
            <Text style={styles.promotionText}>Promoções</Text>
            <View style={styles.promotionBg}>
                <View style={{ gap: 20 }}>
                    <Text style={styles.promotionDesc}>Ofertas todos os dias!</Text>
                    <Text style={[styles.promotionDesc, { fontSize: 18, fontWeight: 'bold' }]}>Combo de batatas GRATIS!</Text>
                    <Text style={styles.promotionDesc}>Em todos os pedidos acima de R$ 20!</Text>
                </View>
                <View style={styles.imageBgFries}>
                    <Image style={styles.imagePromotion} source={require('../assets/batatafritaIMG.png')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewPromotion: {
        gap: 15,
    },
    promotionText: {
        fontSize: 25,
    },
    promotionDesc: {
        fontSize: 16,
        color: 'white',
    },
    promotionBg: {
        backgroundColor: '#033f63',
        height: 150,
        borderRadius: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'space-between',
    },
    imagePromotion: {
        height: 110,
        width: 70,
    },
    imageBgFries: {
        backgroundColor: '#e3e3e3',
        height: 120,
        width: 95,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
    },
})

export default Banner;
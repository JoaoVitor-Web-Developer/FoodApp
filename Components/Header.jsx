import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Header = () => {
    return (
        <View style={styles.viewHeader}>
            <Text style={styles.txtMenu}>Menu</Text>
            <Image style={styles.imgHeader} source={require('../assets/userIMG.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txtMenu: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    imgHeader: {
        width: 45,
        height: 45,
    }
})


export default Header;
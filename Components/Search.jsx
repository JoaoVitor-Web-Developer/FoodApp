import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const Search = () => {
    return (
        <View style={styles.viewSearch}>
            <FontAwesome name="search" size={24} color="black" />
            <TextInput style={styles.inputTextSearch} placeholder='Pesquisar' />
        </View>
    )
}

const styles = StyleSheet.create({
    viewSearch: {
        backgroundColor: '#e3e3e3',
        height: 55,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 15,
    },
    inputTextSearch: {
        flex: 0.9,
        fontSize: 18,
        paddingHorizontal: 22,
    },
})

export default Search;
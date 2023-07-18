import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Search from '../Components/Search';
import Categories from '../Components/Categories';
import Banner from '../Components/Banner';
import FoodItems from '../Components/FoodItems';
import Tabs from './Tabs';


const Home = () => {
    return (
        <ScrollView style={styles.homeView}>
            <SafeAreaView style={{ paddingHorizontal: 25, paddingTop: 60, gap: 20,}}>
                <Header />
                <Search />
                <Categories />
                <Banner />
                <FoodItems />
            </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    homeView: {
        flex: 1,
    },
})


export default Home;
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {

    const nav = useNavigation()

    return (
        <LinearGradient style={styles.bgColor} colors={[Colors.primary, Colors.secondary]}>
            <View style={{
                width: 300,
                height: 300,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 300,
                top: 50,
            }}>
                <Image style={styles.imgWelcome} source={require('../assets/WelcomeIMG.png')} />
            </View>

            <View>
                <Text style={styles.txtWelcome}>
                    Aproveite{'\n'} sua comida!
                </Text>
            </View>

            <TouchableOpacity

            onPress={() => {
                nav.navigate('Tabs');
            }}

                style={{
                    backgroundColor: 'white',
                    width: 220,
                    height: 45,
                    marginTop: 10,
                    padding: 10,
                    borderRadius: 20,
                }}>
                <Text style={styles.btnWelcome}>
                    Peça já!
                </Text>
            </TouchableOpacity>

        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    txtWelcome: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50,
        letterSpacing: 1,
    },
    bgColor: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    imgWelcome: {
        width: 380,
        height: 380,
    },
    btnWelcome: {
        fontSize: 30,
        color: Colors.primary,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 30,
    }
})


export default Welcome;